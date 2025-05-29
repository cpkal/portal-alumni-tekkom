<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\ForumQuestion;
use App\Models\ForumTag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ForumController extends Controller
{
    public function show()
    {
        $forum_questions = ForumQuestion::with(['tags', 'replies'])->latest()->paginate(10);
        return inertia('alumni/forum', [
            'forum_questions' => $forum_questions,
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
}
