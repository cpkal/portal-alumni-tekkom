<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifiedUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
{
    // Jika user sudah login dan belum verified
    if ($request->user() && !$request->user()->is_verified) {
        // Redirect ke halaman khusus, misal route 'verification.notice'
        return redirect()->route('verification.notice')
            ->with('error', 'Akunmu belum terverifikasi. Coba lagi nanti.');
    }

    return $next($request);
}

}
