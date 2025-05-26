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
        $jobVacancy = JobVacancy::where('id', $jobId)->paginate(1); //don't change it. it has to return only one object, paginate 1 is alternative to first or get method

        $job_vacancies = JobVacancy::paginate(4);

        return Inertia::render("alumni/job-internship", ["job_vacancies" => $job_vacancies]);
    }

    public function find($id)
    {
        $job_vacancy = JobVacancy::find($id);
        return Inertia::render("job_vacancy", ["job_vacancy" => $job_vacancy]);
    }
}
