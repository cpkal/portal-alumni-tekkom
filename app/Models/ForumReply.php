<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForumReply extends Model
{
    protected $table = "forum_replies";

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
}
