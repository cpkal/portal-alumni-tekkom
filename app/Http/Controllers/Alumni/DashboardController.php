<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\JobVacancy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // get 2 recent jobs
        $job_vacancies = JobVacancy::limit(2)->get();
        return Inertia::render('alumni/dashboard', [
            'job_vacancies' => $job_vacancies
        ]);
    }
}
