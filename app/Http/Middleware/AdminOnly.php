<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminOnly
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the user is authenticated and has the 'admin' role
        if(Auth::check() && Auth::user()->role !== 'admin') {
            // If not an admin, redirect to home with an error message
            return redirect()->route('home')->with('error', 'Anda tidka punya akses ke halaman ini.');
        }

        return $next($request);
    }
}
