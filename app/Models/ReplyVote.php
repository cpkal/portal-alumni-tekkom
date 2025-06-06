<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReplyVote extends Model
{
    protected $table = "reply_votes";

    protected $fillable = [
        'forum_reply_id',
        'alumni_id',
        'vote_type', // 'upvote' or 'downvote'
    ];

    // Define the relationship with ForumReply
    public function forumReply()
    {
        return $this->belongsTo(ForumReply::class, 'forum_reply_id');
    }

    // Define the relationship with Alumni
    public function alumni()
    {
        return $this->belongsTo(Alumni::class, 'alumni_id');
    }
}
