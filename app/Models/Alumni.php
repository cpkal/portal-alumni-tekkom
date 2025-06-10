<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    use HasFactory;

    protected $table = "alumnis";

    protected $fillable = [
        'user_id',
        'fullname',
        'nim',
        'graduation_year',
        'active_phone_number',
        'date_of_birth',
        'short_description',
    ];

    // has many alumni experiences
    public function experiences()
    {
        return $this->hasMany(AlumniExperience::class, 'alumni_id');
    }

    // has many education histories
    public function educations()
    {
        return $this->hasMany(AlumniEducation::class, 'alumni_id');
    }

    // has many projects
    public function projects()
    {
        return $this->hasMany(AlumniProject::class, 'alumni_id');
    }

    // has many forum replies
    public function forumReplies()
    {
        return $this->hasMany(ForumReply::class, 'alumni_id');
    }
    
    //belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
