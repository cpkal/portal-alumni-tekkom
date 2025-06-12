<?php

namespace App\Http\Controllers;

use App\Models\Alumni;
use App\Models\TracerStudy;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index()
    {
        $alumnisByYear = Alumni::selectRaw('graduation_year, COUNT(*) as count')
            ->groupBy('graduation_year')
            ->orderBy('graduation_year', 'asc')
            ->get();

        // get labels and counts
        $labels = $alumnisByYear->pluck('graduation_year')->toArray();
        $counts = $alumnisByYear->pluck('count')->toArray();
        
        // wait time for first job for pie chart
        $waitTimeCounts = TracerStudy::selectRaw('wait_time_first_job, COUNT(*) as count')
            ->groupBy('wait_time_first_job')
            ->orderBy('wait_time_first_job', 'asc')
            ->get();

        $waitTimeLabels = [
            'Kurang dari 1 bulan',
            '1 – < 3 bulan',
            '3 – < 6 bulan',
            '6 – < 12 bulan',
            '1 – < 2 tahun',
            '2 tahun atau lebih'
        ];
        $waitTimeData = $waitTimeCounts->pluck('count')->toArray();
        $waitTimeColors = [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40'
        ];

        $headlineNews = \App\Models\News::latest()->where('is_published', true)->first();
        // get 3 lateset news excluding the headline news
        $latestNews = \App\Models\News::latest()->where('id', '!=', $headlineNews->id)->where('is_published', true)->take(3)->get();
        $moreNews = \App\Models\News::whereNotIn('id', $latestNews->pluck('id'))->where('is_published', true)->inRandomOrder()->take(4)->get();
        $latestPublicEvents = \App\Models\Event::latest()->take(3)->where('public_can_register', true)->get();
        $latestInternship = \App\Models\JobVacancy::latest()->take(4)->where('employment_type', 'internship')->get();
        $latestJobVacancies = \App\Models\JobVacancy::latest()->take(4)->where('employment_type', '!=', 'internship')->get();
        $alumni = \App\Models\Alumni::inRandomOrder()->take(3)->get();

        
        return view('publik.dashboard', [
            'latestNews' => $latestNews,
            'latestPublicEvents' => $latestPublicEvents,
            'latestJobVacancies' => $latestJobVacancies,
            'latestInternship' => $latestInternship,
            'headlineNews' => $headlineNews,
            'moreNews' => $moreNews,
            'alumni' => $alumni,
            'alumniByYear' => [
                'labels' => $labels,
                'counts' => $counts,
            ],
            'waitTimeFirstJob' => [
                'labels' => $waitTimeLabels,
                'data' => $waitTimeData,
                'colors' => $waitTimeColors,
            ]
        ]);
    }
}
