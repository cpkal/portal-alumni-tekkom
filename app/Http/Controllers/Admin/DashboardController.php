<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index() {
        $userCount = \App\Models\User::count();
        $alumniCount = \App\Models\Alumni::count();
        $eventCount = \App\Models\Event::count();
        $jobCount = \App\Models\JobVacancy::count();
        $tracerStudyCount = \App\Models\TracerStudy::count();
        $forumCount = \App\Models\ForumQuestion::count();
        $newsCount = \App\Models\News::count();

        // get by every years how many students go further study, go working, and their average salary
        $tracerStudyData = \App\Models\TracerStudy::selectRaw('YEAR(created_at) as year, 
            SUM(CASE WHEN is_continuing_study = "1" THEN 1 ELSE 0 END) as continuing_study_count,
            SUM(CASE WHEN is_continuing_working = "1" THEN 1 ELSE 0 END) as continuing_working_count,
            AVG(monthly_salary) as average_salary')
            ->groupBy('year')
            ->get();
        $tracerStudyChartData = $tracerStudyData->map(function ($item) {
            return [
                'year' => $item->year,
                'continuing_study_count' => $item->continuing_study_count,
                'continuing_working_count' => $item->continuing_working_count,
                'average_salary' => $item->average_salary ? number_format($item->average_salary, 2) : 0,
            ];
        });
        $years = $tracerStudyData->pluck('year')->toArray();
        $tracerStudyChartContinuingStudy = $tracerStudyData->pluck('continuing_study_count')->toArray();
        $tracerStudyChartContinuingWorking = $tracerStudyData->pluck('continuing_working_count')->toArray();
        $tracerStudyChartAverageSalary = $tracerStudyData->pluck('average_salary')->toArray();
        $tracerStudyChart = [
            'years' => $years,
            'studyCount' => $tracerStudyChartContinuingStudy,
            'workCount' => $tracerStudyChartContinuingWorking,
            'avgSalary' => $tracerStudyChartAverageSalary,
        ];

        return view('admin.dashboard', [
            'title' => 'Dashboard Admin',
            'description' => 'Selamat datang di dashboard admin portal alumni',
            'userCount' => $userCount,
            'alumniCount' => $alumniCount,
            'eventCount' => $eventCount,
            'jobCount' => $jobCount,
            'tracerStudyCount' => $tracerStudyCount,
            'forumCount' => $forumCount,
            'newsCount' => $newsCount,
            'tracerStudyChart' => $tracerStudyChart,
        ]);
    }
}
