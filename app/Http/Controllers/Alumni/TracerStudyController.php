<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTracerStudyRequest;
use App\Models\TracerStudy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TracerStudyController extends Controller
{
    public function store(StoreTracerStudyRequest $request) {
        $tracer = new TracerStudy();
        $tracer->full_name = $request->full_name;
        $tracer->nim = $request->nim;
        $tracer->enrollment_year = $request->enrollment_year;
        $tracer->graduation_year = $request->graduation_year;
        $tracer->undergraduate_thesis_title = $request->undergraduation_thesis_title;
        $tracer->address = $request->address;
        $tracer->active_phone_number = $request->active_phone_number;
        $tracer->email = $request->email;

        $tracer->github_name = $request->github_name;
        $tracer->linkedin_name = $request->linkedin_name;
        $tracer->instagram_name = $request->instagram_name;

        $tracer->is_continuing_study = $request->continuing_study == 'yes' ? true : false;
        $tracer->institution_name = $request->institution_name;
        $tracer->major = $request->major;
        $tracer->education_level = $request->education_level;
        $tracer->is_further_study_related_to_major = $request->is_further_study_related_to_major == 'yes'? true : false;

        $tracer->is_continuing_working = $request->continuing_working == 'yes'? true : false;
        $tracer->company_name = $request->company_name;
        $tracer->company_address    = $request->company_address;
        $tracer->job_position = $request->job_position;
        $tracer->company_business_field = $request->company_business_field;
        $tracer->wait_time_first_job = $request->wait_time_first_job;
        $tracer->is_job_related_to_major = $request->is_job_related_to_major == 'yes'? true : false;
        $tracer->monthly_salary = $request->monthly_salary;

        $tracer->study_satisfaction = $request->study_satisfaction;
        $tracer->curriculum_suitability = $request->curriculum_suitability;
        $tracer->facilities_satisfaction = $request->facilities_satisfaction;
        $tracer->competency_suitability = $request->competency_suitability == 'yes'? true : false;
        $tracer->suggestion = $request->suggestion;
        $tracer->user_id = Auth::user()->id;

        $tracer->save();

        return Inertia::render("welcome");
    }

    public function show() {
        $user_id = Auth::user()->id;
        $tracer = TracerStudy::where("user_id", $user_id)->first();

        return Inertia::render("alumni/tracer-study", [
            'tracer' => $tracer,
        ] );
    }
}
