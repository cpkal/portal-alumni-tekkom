<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventParticipant extends Model
{
    //

    protected $fillable = [
        'event_id',
        'user_id',
        'status',
        'registered_at'
    ];

    // belongs to relationship with Event
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
