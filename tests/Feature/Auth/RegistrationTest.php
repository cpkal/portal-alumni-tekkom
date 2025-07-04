<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function test_new_users_can_register()
    {
        $response = $this->post('/register', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
            'nim' => '1234567890',
            'graduation_year' => '2023',
            'active_phone_number' => '+628123456789',
            'date_of_birth' => '01-01-2000',
        ]);

        $this->assertAuthenticated();
        
        $response->assertRedirect(route('login', absolute: false));
    }
}
