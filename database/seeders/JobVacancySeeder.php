<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobVacancySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // list of jobs
        $jobs = [
            [
                'job_title' => 'Frontend Developer',
                'qualifications' => 'Bachelor degree in Computer Science or related field. Experience with React and TailwindCSS.',
                'job_description' => 'Develop and maintain user-facing features. Collaborate with backend and design teams.',
                'company_name' => 'TechNova Inc.',
                'employment_type' => 'full_time',
                'job_type' => 'remote',
                'apply_link' => 'https://careers.technova.com/frontend-developer',
                'location' => 'Jakarta, Indonesia',
                'salary_start' => 8000000,
                'salary_end' => 15000000,
                'salary_period' => 'monthly'
            ],
            [
                'job_title' => 'Data Analyst Intern',
                'qualifications' => 'Final year student in Statistics or related field. Familiar with Excel and SQL.',
                'job_description' => 'Assist in data cleaning and visualization. Help build dashboards for internal teams.',
                'company_name' => 'InsightWorks',
                'employment_type' => 'internship',
                'job_type' => 'on_site',
                'apply_link' => 'https://insightworks.com/internship',
                'location' => 'Bandung, Indonesia',
                'salary_start' => 2000000,
                'salary_end' => 3000000,
                'salary_period' => 'monthly'
            ],
            [
                'job_title' => 'UI/UX Designer',
                'qualifications' => '2+ years experience in UI/UX. Proficiency in Figma and user research.',
                'job_description' => 'Design intuitive user interfaces and perform usability testing.',
                'company_name' => 'DesignCore Studio',
                'employment_type' => 'freelance',
                'job_type' => 'hybrid',
                'apply_link' => 'https://designcore.com/jobs/uiux-designer',
                'location' => 'Remote / Yogyakarta',
                'salary_start' => 5000000,
                'salary_end' => 10000000,
                'salary_period' => 'monthly'
            ],
        ];

        DB::table('job_vacancies')->insert($jobs);
    }
}
