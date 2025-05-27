<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\JobVacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobVacancyController extends Controller
{
    public function index(Request $request)
    {   
        // get query params
        $jobId = $request->query('jobId');
        $employmentType = $request->query('employmentType');
        $jobType = $request->query('jobType');
        $search = $request->query('search');
        $salaryStart = $request->query('salaryStart');
        $salaryEnd = $request->query('salaryEnd');

        // $jobVacancy = JobVacancy::where('employment_type', $employmentType)
        //     ->where('job_type', $jobType)
        //     ->where('job_title', $search);
            // ->where('')

        if($jobId) {
            $jobVacancy = JobVacancy::where('id', $jobId)->first();

            return Inertia::render("alumni/job-internship", ["job_vacancy" => $jobVacancy]);
        }

        $job_vacancies = JobVacancy::paginate(4);

        return Inertia::render("alumni/job-internship", ["job_vacancies" => $job_vacancies]);
    }

    public function show($id)
    {
        $job_vacancy = JobVacancy::find($id);
        return Inertia::render("alumni/job-internship", ["job_vacancy" => $job_vacancy]);
    }
}
