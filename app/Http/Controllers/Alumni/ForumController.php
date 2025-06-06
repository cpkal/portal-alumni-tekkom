<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\ForumQuestion;
use App\Models\ForumReply;
use App\Models\ForumTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ForumController extends Controller
{
    public function show()
    {
        // user who post question, taga, replies and user who replies
        $forum_questions = ForumQuestion::with(['user', 'tags', 'replies.alumni'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        // get random forum tags
        $forum_tags = ForumTag::inRandomOrder()->take(10)->get();

        return inertia('alumni/forum', [
            'forum_questions' => $forum_questions,
            'forum_tags' => $forum_tags,
        ]);
    }

    public function myQuestions()
    {
        return inertia('alumni/forum/my-questions');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'question' => 'required',
            'tags' => 'nullable',
        ]);

        // return $request->all();

        // Logic to store the question in the database would go here
        $forum = new ForumQuestion;
        $forum->title = $request->title;
        $forum->description = $request->question;
        $forum->user_id = Auth::id(); // Assuming you have user authentication
        $forum->save();

        // foreach tags separated by comma and insert to ForumTag model
        if ($request->tags) {
            $tags = explode(',', $request->tags);
            foreach ($tags as $tag) {
                $forum_tag = new ForumTag;
                $forum_tag->name = trim($tag);
                $forum_tag->forum_question_id = $forum->id;
                $forum_tag->save();
            }
        }

        return redirect()->route('forum.my-questions')->with('success', 'Pertanyaan berhasil dibuat');
    }

    public function showQuestion($id)
    {
        // get question by id and sort replies by total votes
        $forum_question = ForumQuestion::with([
            'user',
            'tags',
            'replies' => function ($query) {
                $query->with('alumni')
                    ->orderBy('total_votes', 'desc'); // Sort replies by total votes
            },
            'replies.alumni'
        ])
            ->orderBy('created_at', 'desc')
            ->where('id', $id)
            ->firstOrFail();

        // get random forum tags
        $forum_tags = ForumTag::inRandomOrder()->take(10)->get();

        return inertia('alumni/detail-forum', [
            'forum_question' => $forum_question,
            'forum_tags' => $forum_tags,
        ]);
    }

    public function storeAnswer(Request $request, $id)
    {
        $request->validate([
            'answer' => 'required',
        ]);

        // Logic to store the answer in the database would go here
        $forum_question = ForumQuestion::findOrFail($id);
        $alumni = Auth::user()->alumni;
        $forum_question->replies()->create([
            'alumni_id' => $alumni->id,
            'description' => $request->answer,
        ]);

        return redirect()->route('forum.show', ['id' => $id])->with('success', 'Jawaban berhasil ditambahkan');
    }

    public function vote(Request $request, $id)
    {
        $request->validate([
            'type' => 'required|in:up,down',
        ]);

        // Logic to handle voting on a reply would go here
        // For example, you might find the reply by ID and update its vote count
        // This is a placeholder implementation
        $reply = ForumReply::findOrFail($id);

        // reply votes
        $voteType = $request->type === 'up' ? 'upvote' : 'downvote';
        $reply->votes()->updateOrCreate(
            ['alumni_id' => Auth::user()->alumni->id],
            ['vote_type' => $voteType]
        );

        $reply->upvotes = $reply->votes()->where('vote_type', 'upvote')->count();
        $reply->downvotes = $reply->votes()->where('vote_type', 'downvote')->count();
        $reply->total_votes = $reply->upvotes - $reply->downvotes;
        $reply->save();

        return response()->json([
            'message' => 'Vote recorded successfully',
            'upvotes' => $reply->upvotes,
            'downvotes' => $reply->downvotes,
        ]);
    }
}
