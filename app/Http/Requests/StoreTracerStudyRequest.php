<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTracerStudyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => 'required|string|max:255',
            'nim' => 'required|string|max:50',
            'enrollment_year' => 'required|digits:4',
            'graduation_year' => 'required|digits:4',
            'undergraduate_thesis_title' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:255',
            'active_phone_number' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            
            'github_name' => 'nullable|string|max:255',
            'linkedin_name' => 'nullable|string|max:255',
            'instagram_name' => 'nullable|string|max:255',

            'continuing_study' => 'required|in:yes,no',
            'institution_name' => 'required_if:continuing_study,yes|string|max:255',
            'major' => 'required_if:continuing_study,yes|string|max:255',
            'education_level' => 'required_if:continuing_study,yes|string|max:50',
            'is_further_study_related_to_major' => 'required_if:continuing_study,yes|in:yes,no',

            'continuing_working' => 'required|in:yes,no',
            'company_name' => 'required_if:continuing_working,yes|string|max:255',
            'company_address' => 'required_if:continuing_working,yes|string|max:255',
            'job_position' => 'required_if:continuing_working,yes|string|max:255',
            'company_business_field' => 'required_if:continuing_working,yes|string|max:255',
            'wait_time_first_job' => 'required_if:continuing_working,yes|string|max:100',
            'is_job_related_to_major' => 'required',
            'monthly_salary' => 'required_if:continuing_working,yes|numeric|min:0',

            'study_satisfaction' => 'required|in:1,2,3,4,5',
            'curriculum_suitability' => 'required|in:1,2,3,4,5',
            'facilities_satisfaction' => 'required|in:1,2,3,4,5',
            'competency_suitability' => 'required',
            'suggestion' => 'nullable|string|max:1000',
        ];
    }
}
