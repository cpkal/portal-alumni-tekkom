<?php

namespace App\Http\Controllers;

use App\Models\Alumni;
use Illuminate\Http\Request;

class StatistikController extends Controller
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
        $waitTimeCounts = \App\Models\TracerStudy::selectRaw('wait_time_first_job, COUNT(*) as count')
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
        $waitTimeColors = [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40'
        ];

        // alumni after graduation year
        //continue working
        // continue study
        //or not both
        // or both workin and study

        $statusCounts = \App\Models\TracerStudy::selectRaw('is_continuing_working, is_continuing_study, COUNT(*) as count')
            ->groupBy('is_continuing_working', 'is_continuing_study')
            ->get();

        $statusLabels = [
            'Bekerja',
            'Melanjutkan Studi',
            'Bekerja dan Melanjutkan Studi',
            'Tidak Bekerja dan Tidak Melanjutkan Studi'
        ];
        $statusData = [
            $statusCounts->where('is_continuing_working', '1')->where('is_continuing_study', '0')->sum('count'),
            $statusCounts->where('is_continuing_working', '0')->where('is_continuing_study', '1')->sum('count'),
            $statusCounts->where('is_continuing_working', '1')->where('is_continuing_study', '1')->sum('count'),
            $statusCounts->where('is_continuing_working', '0')->where('is_continuing_study', '0')->sum('count'),
        ];

        $waitTimeData = $waitTimeCounts->pluck('count')->toArray();

        // is job related to major
        $jobRelatedCounts = \App\Models\TracerStudy::selectRaw('is_job_related_to_major, COUNT(*) as count')
            ->groupBy('is_job_related_to_major')
            ->get();
            
        $jobRelatedLabels = [
            'Sesuai',
            'Tidak Sesuai'
        ];

        $jobRelatedData = [
            $jobRelatedCounts->where('is_job_related_to_major', '1')->sum('count'),
            $jobRelatedCounts->where('is_job_related_to_major', '0')->sum('count'),
        ];

        // is study related to major
        $studyRelatedCounts = \App\Models\TracerStudy::selectRaw('is_further_study_related_to_major, COUNT(*) as count')
            ->groupBy('is_further_study_related_to_major')
            ->get();

        $studyRelatedLabels = [
            'Sesuai',
            'Tidak Sesuai'
        ];

        $studyRelatedData = [
            $studyRelatedCounts->where('is_further_study_related_to_major', 1)->sum('count'),
            $studyRelatedCounts->where('is_further_study_related_to_major', 0)->sum('count'),
        ];
        
        return view('publik.statistik', [
            'alumniByYear' => [
                'labels' => $labels,
                'counts' => $counts,
            ],
            'waitTimeFirstJob' => [
                'labels' => $waitTimeLabels,
                'data' => $waitTimeData,
            ],
            'statusAfterGraduation' => [
                'labels' => $statusLabels,
                'data' => $statusData,
            ],
            'jobRelatedToMajor' => [
                'labels' => $jobRelatedLabels,
                'data' => $jobRelatedData,
            ],
            'studyRelatedToMajor' => [
                'labels' => $studyRelatedLabels,
                'data' => $studyRelatedData,
            ],
        ]);
    }
}
