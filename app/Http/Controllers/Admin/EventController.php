<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $query = Event::query();

        if ($request->filled('search')) {
            $query->where('event_name', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('type')) { 
            $query->where('event_type', $request->type);
        }

        $events = $query->orderBy('created_at', 'asc')->paginate(10);

        return view('admin.events.tabelEvent', compact('events'));
    }

    public function create()
    {
        return view('admin.events.formEvent');
    }

    public function store(Request $request)
    {
        $request->validate([
            'event_name' => 'required',
            'event_type' => 'required',
            'event_date' => 'required|date',
            'event_location' => 'required',
            'event_organizer' => 'required',
            'event_link' => 'nullable|url',
            'event_description' => 'nullable',
            'public_can_register' => 'nullable|in:0,1',
            'event_time' => 'nullable|date_format:H:i',
        ]);

        Event::create([
            'event_name' => $request->event_name,
            'event_type' => $request->event_type,
            'event_date' => $request->event_date,
            'event_location' => $request->event_location,
            'event_organizer' => $request->event_organizer,
            'event_link' => $request->event_link,
            'event_description' => $request->event_description,
            'public_can_register' => (bool) $request->input('public_can_register'),
            'event_time' => $request->event_time,
        ]);

        return redirect()->route('admin.events.index')->with('success', 'Event berhasil ditambahkan!');
    }

    public function edit($id)
    {
        $events = Event::findOrFail($id);
        return view('admin.events.formEvent', compact('events'));
    }

    public function update(Request $request, $id)
    {
        $event = Event::findOrFail($id);

        $request->validate([
            'event_name' => 'required',
            'event_type' => 'required',
            'event_date' => 'required|date',
            'event_location' => 'required',
            'event_organizer' => 'required',
            'event_link' => 'nullable|url',
            'event_description' => 'nullable',
            'public_can_register' => 'nullable|in:0,1',
            'event_time' => 'nullable|date_format:H:i',
        ]);

        $event->update([
            'event_name' => $request->event_name,
            'event_type' => $request->event_type,
            'event_date' => $request->event_date,
            'event_location' => $request->event_location,
            'event_organizer' => $request->event_organizer,
            'event_link' => $request->event_link,
            'event_description' => $request->event_description,
            'public_can_register' => (bool) $request->input('public_can_register'),
            'event_time' => $request->event_time,
        ]);

        return redirect()->route('admin.events.index')->with('success', 'Event berhasil diperbarui!');
    }

    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();

        return redirect()->route('admin.events.index')->with('success', 'Event berhasil dihapus.');
    }
}
