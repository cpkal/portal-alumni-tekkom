<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = "events";

    protected $fillable = [
        'event_image',
        'event_name',
        'event_type',
        'event_date',
        'event_location',
        'event_organizer',
        'event_link',
        'event_description',
        'public_can_register',
        'event_time', // New field for event time
    ];

    protected $casts = [
        // 'event_date' => 'datetime',
        'public_can_register' => 'boolean',
        // 'event_date_formatted' => 'datetime',
        
    ];
    
    public function participants()
    {
        return $this->hasMany(EventParticipant::class, 'event_id');
    }

    // belongsToMany relationship with User
    public function users()
    {
        return $this->belongsToMany(User::class, 'event_participants', 'event_id', 'user_id');
    }

 

    // format event_time to a more readable format
    public function getEventTimeFormattedAttribute()
    {
        return \Carbon\Carbon::parse($this->event_time)->format('H:i');
    }
}
