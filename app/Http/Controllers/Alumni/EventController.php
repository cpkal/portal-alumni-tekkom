<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index(Request $request)
    {
        // get query params
        $eventId = $request->query('eventId');
        $eventType = $request->query('eventType');
        $search = $request->query('search');

        // if jobId is present, show the specific job vacancy
        if ($eventId) {
            $event = Event::where('id', $eventId)->first();

            return Inertia::render("alumni/events", ["event" => $event]);
        }

        $event = Event::query();
        if ($eventType != null) {
            $event->where('event_type', $eventType);
        }
        if ($search != null) {
            $search = strtolower($search);
            $event->where('event_name', 'like', '%' . $search . '%');
        }

        $events = $event->paginate(4);
        
        return Inertia::render("alumni/events", [
            "events" => $events
        ]);
    }

    public function show($id)
    {
        $event = Event::find($id);
        return Inertia::render("alumni/events", ["event" => $event]);
    }
}
