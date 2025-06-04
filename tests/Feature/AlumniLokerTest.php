<?php

use App\Models\User;

test('loker_page_can_be_rendered', function () {
    $user = User::factory()->create([
        'is_verified' => true,
    ]);

    $response = $this->actingAs($user)->get(route('job-vacancies'));
    
    $response->assertStatus(200);
});