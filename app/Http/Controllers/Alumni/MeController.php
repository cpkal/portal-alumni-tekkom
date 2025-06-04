<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeController extends Controller
{
    public function index()
    {
        return Inertia::render('alumni/me');
    }
}
