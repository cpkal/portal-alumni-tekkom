<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = "events";
    
    public function participants()
    {
        return $this->hasMany(EventParticipant::class, 'event_id');
    }

    // belongsToMany relationship with User
    public function users()
    {
        return $this->belongsToMany(User::class, 'event_participants', 'event_id', 'user_id');
    }
}
