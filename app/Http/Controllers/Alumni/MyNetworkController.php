<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\Alumni;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MyNetworkController extends Controller
{
    public function index(Request $request) {
       // get query params
        $alumniId = $request->query('alumniId');
        $alumniType = $request->query('eventType');
        $search = $request->query('search');

        // if jobId is present, show the specific job vacancy
        if ($alumniId) {
            $alumni = Alumni::with(['experiences', 'educations', 'projects'])->where('id', $alumniId)->first();

            return Inertia::render("alumni/networking", [
                "alumni" => $alumni,
                "alumnis" => Alumni::paginate(4),
            ]);
        }

        $alumni = Alumni::query();
        // if ($alumniType != null) {
        //     $alumni->where('event_type', $alumniType);
        // }
        if ($search != null) {
            $search = strtolower($search);
            $alumni->where('fullname', 'like', '%' . $search . '%');
        }

        $alumnis = $alumni->paginate(4);

        return Inertia::render("alumni/networking", [
            "alumnis" => $alumnis
        ]);
    }
}
