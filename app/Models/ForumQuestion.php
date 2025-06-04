<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForumQuestion extends Model
{
    protected $table = "forum_questions";

    // has many tags
    public function tags()
    {
        return $this->hasMany(ForumTag::class, 'forum_question_id');
    }

    // has many replies
    public function replies()
    {
        return $this->hasMany(ForumReply::class, 'forum_question_id');
    }

    // belongs to user
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
