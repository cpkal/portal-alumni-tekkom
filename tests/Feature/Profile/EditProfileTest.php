<?php

use App\Models\Alumni;
use App\Models\User;

test('edit_profile_alumni_page_can_be_rendered_for_authenticated_user', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('profile.me'));

    $response->assertStatus(302);
});

test('edit_profile_alumni_page_redirects_to_login_for_guest_user', function () {
    $response = $this->get(route('profile.me'));

    $response->assertRedirect(route('login', absolute: false));
});


test('edit_profile_bio_can_be_updated', function () {
    $user = User::factory()->create(
        [
            'is_verified' => true, // Ensure the user is verified
        ]
    );
    $alumni = Alumni::create([
        'user_id' => $user->id,
        'fullname' => 'Test User',
        'active_phone_number' => '+628123456789',
        'nim' => '1234567890',
        'graduation_year' => 2023,
        'date_of_birth' => '2000-01-01',
        'short_description' => 'This is a short description.',
        
    ]);

    $response = $this->actingAs($user)->post(route('profile.me.update'), [
        'full_name' => 'Test User',
        'active_phone_number' => '+628123456789',
    ]);

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('profile.me'));

    $user->refresh();
    $this->assertSame('Test User', $user->alumni->fullname);
    $this->assertSame('+628123456789', $user->alumni->active_phone_number);
});

test('edit_profile_short_desc_can_be_updated', function () {
    $user = User::factory()->create([
        'is_verified' => true, // Ensure the user is verified
    ]);

    $alumni = Alumni::create([
        'user_id' => $user->id,
        'fullname' => 'Test User',
        'active_phone_number' => '+628123456789',
        'nim' => '1234567890',
        'graduation_year' => 2023,
        'date_of_birth' => '2000-01-01',
        'short_description' => '',
    ]);

    $response = $this->actingAs($user)->post(route('profile.me.shortdesc.update'), [
        'short_description' => 'This is a short description.',
    ]);

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('profile.me'));

    $user->refresh();
    $this->assertSame('This is a short description.', $user->alumni->short_description);
});

test('alumni_can_add_new_experience', function () {
    $user = User::factory()->create([
        'is_verified' => true, // Ensure the user is verified
    ]);

    $alumni = Alumni::create([
        'user_id' => $user->id,
        'fullname' => 'Test User',
        'active_phone_number' => '+628123456789',
        'nim' => '1234567890',
        'graduation_year' => 2023,
        'date_of_birth' => '2000-01-01',
    ]);

    $response = $this->actingAs($user)->post(route('profile.me.experience.store'), [
        'alumni_id' => $alumni->id,
        'company_name' => 'Tech Company',
        'job_title' => 'Software Engineer',
        'start_date' => '2023-01-01',
        'end_date' => '2024-01-01',
        'location' => 'Remote',
        'job_description' => 'Developed software applications.',
        'employment_type' => 'internship', // Example employment type
    ]);
    

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('profile.me'));

    $user->refresh();
    $this->assertCount(1, $user->alumni->experiences);
});

test('alumni_can_add_new_education', function () {
    $user = User::factory()->create([
        'is_verified' => true, // Ensure the user is verified
    ]);
    
    $alumni = Alumni::create([
        'user_id' => $user->id,
        'fullname' => 'Test User',
        'active_phone_number' => '+628123456789',
        'nim' => '1234567890',
        'graduation_year' => 2023,
        'date_of_birth' => '2000-01-01',
    ]);

    $response = $this->actingAs($user)->post(route('profile.me.education.store'), [
        'alumni_id' => $alumni->id,
        'institution_name' => 'Tech University',
        'degree' => 'Bachelor of Science',
        'major' => 'Computer Science',
        'start_year' => 2019,
        'end_year' => 2023,
        'gpa' => 3.75,
        'activities' => 'Coding Club, Hackathons',
        'description' => 'Studied computer science and participated in various coding competitions.',
    ]);

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('profile.me'));

    $user->refresh();
    $this->assertCount(1, $user->alumni->educations);
});
test('alumni_can_add_new_project', function () {
    $user = User::factory()->create([
        'is_verified' => true, // Ensure the user is verified
    ]);
    
    $alumni = Alumni::create([
        'user_id' => $user->id,
        'fullname' => 'Test User',
        'active_phone_number' => '+628123456789',
        'nim' => '1234567890',
        'graduation_year' => 2023,
        'date_of_birth' => '2000-01-01',
    ]);

    $response = $this->actingAs($user)->post(route('profile.me.project.store'), [
        'alumni_id' => $alumni->id,
        'project_name' => 'Project Alpha',
        'description' => 'A project about AI development.',
        'start_date' => '2023-01-01',
        'end_date' => '2023-12-31',
    ]);

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('profile.me'));

    $user->refresh();
    $this->assertCount(1, $user->alumni->projects);
});

test('alumni_can_delete_experience', function () {
    $user = User::factory()->create([
        'is_verified' => true, // Ensure the user is verified
    ]);
    
    $alumni = Alumni::create([
        'user_id' => $user->id,
        'fullname' => 'Test User',
        'active_phone_number' => '+628123456789',
        'nim' => '1234567890',
        'graduation_year' => 2023,
        'date_of_birth' => '2000-01-01',
    ]);


    $experience = $alumni->experiences()->create([
        'company_name' => 'Tech Company',
        'job_title' => 'Software Engineer',
        'start_date' => '2023-01-01',
        'end_date' => '2024-01-01',
        'location' => 'Remote',
        'job_description' => 'Developed software applications.',
        'employment_type' => 'full_time',
    ]);

    $response = $this->actingAs($user)->delete(route('profile.me.experience.delete', ['id' => $experience->id]));

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('profile.me'));

    $user->refresh();
    $this->assertCount(0, $user->alumni->experiences);
});

test('alumni_can_delete_education', function () {
    $user = User::factory()->create([
        'is_verified' => true, // Ensure the user is verified
    ]);
    
    $alumni = Alumni::create([
        'user_id' => $user->id,
        'fullname' => 'Test User',
        'active_phone_number' => '+628123456789',
        'nim' => '1234567890',
        'graduation_year' => 2023,
        'date_of_birth' => '2000-01-01',
    ]);

    $education = $alumni->educations()->create([
        'institution_name' => 'Tech University',
        'degree' => 'Bachelor of Science',
        'major' => 'Computer Science',
        'start_year' => 2019,
        'end_year' => 2023,
        'gpa' => 3.75,
        'activities' => 'Coding Club, Hackathons',
        'description' => 'Studied computer science and participated in various coding competitions.',
    ]);

    $response = $this->actingAs($user)->delete(route('profile.me.education.delete', ['id' => $education->id]));

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('profile.me'));

    $user->refresh();
    $this->assertCount(0, $user->alumni->educations);
});
test('alumni_can_delete_project', function () {
    $user = User::factory()->create([
        'is_verified' => true, // Ensure the user is verified
    ]);
    
    $alumni = Alumni::create([
        'user_id' => $user->id,
        'fullname' => 'Test User',
        'active_phone_number' => '+628123456789',
        'nim' => '1234567890',
        'graduation_year' => 2023,
        'date_of_birth' => '2000-01-01',
    ]);

    $project = $alumni->projects()->create([
        'project_name' => 'Project Alpha',
        'description' => 'A project about AI development.',
        'start_date' => '2023-01-01',
        'end_date' => '2023-12-31',
    ]);

    $response = $this->actingAs($user)->delete(route('profile.me.project.delete', ['id' => $project->id]));

    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('profile.me'));

    $user->refresh();
    $this->assertCount(0, $user->alumni->projects);
});