<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BeritaController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        // Fetch the news item by slug
        $news = \App\Models\News::where('slug', $slug)->firstOrFail();

        // Return the view with the news item
        return view('publik.berita_detail', compact('news'));
    }
}
