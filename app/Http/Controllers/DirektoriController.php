<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DirektoriController extends Controller
{
    /**
     * Display the alumni directory.
     */
    public function index()
    {
        // Fetch all alumni data
        $alumnis = \App\Models\Alumni::all();

        // Return the view with alumni data
        return view('publik.direktori_alumni', compact('alumnis'));
    }
}
