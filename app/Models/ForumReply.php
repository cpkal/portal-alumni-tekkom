<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForumReply extends Model
{
    protected $table = "forum_replies";

    protected $fillable = [
        'forum_question_id',
        'alumni_id',
        'description',
    ];

    // user
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // alumn
    public function alumni()
    {
        return $this->belongsTo(Alumni::class, 'alumni_id');
    }

    // has many votes
    public function votes()
    {
        return $this->hasMany(ReplyVote::class, 'forum_reply_id');
    }
}
