<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TracerStudy;
use Illuminate\Http\Request;

class TracerController extends Controller
{
    public function tabel()
    {
        $tracers = TracerStudy::paginate(10);
        return view('admin.tracer.tabelTracer', compact('tracers'));
    }

    public function createTracer()
    {
        // Logic to show form for creating tracer data
        return view('admin.tracer.formTracer');
    }

    public function storeTracer(Request $request)
    {
        // Logic to store tracer data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            // Add other validation rules as needed
        ]);

        // Store logic here

        return redirect()->route('admin.tracer.tabelTracer')->with('success', 'Tracer data successfully added!');
    }
}
