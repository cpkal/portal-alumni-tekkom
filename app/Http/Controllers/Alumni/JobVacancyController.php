<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\JobVacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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

        // if jobId is present, show the specific job vacancy
        if ($jobId) {
            $jobVacancy = JobVacancy::where('id', $jobId)->first();

            return Inertia::render("alumni/job-internship", [
                "job_vacancy" => $jobVacancy,
                "job_vacancies" => JobVacancy::paginate(4),
            ]);
        }

        $jobVacancy = JobVacancy::query();
        if ($employmentType != null) {
            $jobVacancy->where('employment_type', $employmentType);
        }
        if ($jobType != null) {
            $jobVacancy->where('job_type', $jobType);
        }
        if ($search != null) {
            $search = strtolower($search);
            $jobVacancy->where('job_title', 'like', '%' . $search . '%');
        }

        $job_vacancies = $jobVacancy->paginate(4);

        //bool is last page
        $isLastPage = $job_vacancies->currentPage() == $job_vacancies->lastPage();
        
        return Inertia::render("alumni/job-internship", [
            "job_vacancies" => $job_vacancies
        ]);
    }

    public function show($id)
    {
        $job_vacancy = JobVacancy::find($id);
        return Inertia::render("alumni/job-internship", ["job_vacancy" => $job_vacancy]);
    }
}
