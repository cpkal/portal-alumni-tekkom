<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TracerStudy extends Model
{
    protected $table = "tracer_studies";

    protected $fillable = [
        'full_name',
        'nim',
        'enrollment_year',
        'graduation_year',
        'undergraduate_thesis_title',
        'address',
        'active_phone_number',
        'email',
        'github_name',
        'linkedin_name',
        'instagram_name',
        'is_continuing_study',
        'institution_name',
        'major',
        'education_level',
        'is_further_study_related_to_major',
        'is_continuing_working',
        'company_name',
        'company_address',
        'job_position',
        'company_business_field',
        'wait_time_first_job',
        'is_job_related_to_major',
        'monthly_salary',
        'study_satisfaction',
        'curriculum_suitability',
        'facilities_satisfaction',
        'competency_suitability',
        'suggestion',
        'user_id',
    ];
}
