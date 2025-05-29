<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForumTag extends Model
{
    protected $fillable = [
        'name',
        'forum_question_id'
    ];
}
