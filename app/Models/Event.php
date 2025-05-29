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
}
