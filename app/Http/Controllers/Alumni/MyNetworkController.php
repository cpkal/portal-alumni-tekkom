<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\Alumni;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MyNetworkController extends Controller
{
    public function index() {
        $alumnis = Alumni::paginate(8);

        return Inertia::render("alumni/networking", [
            "alumnis"=> $alumnis
        ]);
    }
}
