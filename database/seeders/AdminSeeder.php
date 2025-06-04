<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // create an admin user
        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'), // use a secure password
            'role' => 'admin', // assuming you have a role field
            'email_verified_at' => now(), // set email verified at
            'created_at' => now(), // set created at
            'updated_at' => now(), // set updated at
        ]);

        
    }
}
