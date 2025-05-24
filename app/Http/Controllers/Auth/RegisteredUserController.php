<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterAlumniRequest;
use App\Models\Alumni;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterAlumniRequest $request)   
    {
        return $request->all();
        $user = User::create($request->only('name', 'email', 'password') + [
            'password' => Hash::make($request->password),
            'role' => 'alumni',
        ]);
        

        $alumni = Alumni::create($request->only('nim', 'graduation_year', 'active_phone_number', 'date_of_birth') + [
            'user_id' => $user->id,
            'fullname' => $request->name,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return to_route('dashboard');
    }
}
