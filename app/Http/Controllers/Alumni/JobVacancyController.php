<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\JobVacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobVacancyController extends Controller
{
    public function index()
    {
        $job_vacancies = JobVacancy::paginate(4);

        return Inertia::render("alumni/job-internship", ["job_vacancies" => $job_vacancies]);
    }

    public function find($id)
    {
        $job_vacancy = JobVacancy::find($id);
        return Inertia::render("job_vacancy", ["job_vacancy" => $job_vacancy]);
    }
}
