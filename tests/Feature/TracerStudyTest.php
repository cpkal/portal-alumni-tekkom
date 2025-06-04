<?php

use App\Models\User;

test('tracer_study_page_can_be_rendered', function () {
    $user = User::factory()->create([
        'is_verified' => true,
    ]);
    $response = $this->actingAs($user)->get(route('tracer-study.index'));

    $response->assertStatus(200);
});

test('tracer_study_page_redirects_to_login_for_guest_user', function () {
    $response = $this->get(route('tracer-study.index'));

    $response->assertRedirect(route('login', absolute: false));
});
test('tracer_study_form_can_be_submitted', function () {
    $user = User::factory()->create([
        'is_verified' => true,
    ]);

    $response = $this->actingAs($user)->post(route('tracer-study.post'), [
        'full_name' => 'John Doe',
        'nim' => '123456789',
        'enrollment_year' => '2015',
        'graduation_year' => '2019',
        'undergraduate_thesis_title' => 'My Thesis',
        'address' => '123 Main St',
        'active_phone_number' => '08123456789',
        'email' => 'ak@gmail.com',
        'github_name' => 'johndoe',
        'linkedin_name' => 'johndoe',
        'instagram_name' => 'johndoe',
        'is_continuing_study' => 'no',
        'institution_name' => 'University of Example',
        'major' => 'Computer Science',
        'education_level' => 'Bachelor',
        'is_further_study_related_to_major' => true,
        'is_continuing_working' => 'yes',
        'company_name' => 'Example Corp',
        'company_address' => '456 Corporate Blvd',
        'job_position' => 'Software Engineer',
        'company_business_field' => 'Technology',
        'wait_time_first_job' => 2,
        'is_job_related_to_major' => true,
        'monthly_salary' => 5000000,
        'study_satisfaction' => 4,
        'curriculum_suitability' => 3,
        'facilities_satisfaction' => 4,
        'competency_suitability' => true,
        'suggestion' => 'Great program, keep it up!',
    ]);
    $response->assertSessionHasNoErrors();
    $response->assertRedirect(route('tracer-study.index'));
    
    $user->refresh();
    $this->assertNotNull($user->tracerStudy);
});
