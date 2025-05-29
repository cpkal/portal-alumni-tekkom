<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function register(Request $request)
    {
        $request->validate([
            'event_id' => 'required|exists:events,id',
        ]);

        $event = Event::find($request->event_id);
        if (!$event) {
            return redirect()->back()->withErrors(['error' => 'Event not found']);
        }

        // check if the user is already registered for the event
        $existingParticipant = $event->participants()->where('user_id', Auth::id())->first();

        if ($existingParticipant) {
            return redirect()->route('events')->withErrors(['error' => 'Sudah terdaftar di acara ini']);
        }

        // Register event participant
        $event->participants()->create([
            'user_id' => Auth::id(),
            'status' => 'registered',
        ]);

        return redirect()->route('events')->with('success', 'Berhasil daftar acara');
    }

    public function registered()
    {
        $user = User::find(Auth::id());

        // with event detail and status participant
        $registeredEvents = $user->eventParticipants()->with(['event' => function ($query) {
            $query->select('id', 'event_name', 'event_type', 'event_date', 'event_location');
        }])->get()->map(function ($participant) {
            return [
                'event_id' => $participant->event->id,
                'event_name' => $participant->event->event_name,
                'event_type' => $participant->event->event_type,
                'event_date' => $participant->event->event_date,
                'event_location' => $participant->event->event_location,
                'status' => $participant->status,
                'registered_at' => $participant->created_at
            ];
        });

        return Inertia::render("alumni/registered-events", [
            "events" => $registeredEvents
        ]);
    }
}
