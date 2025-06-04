<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobVacancy extends Model
{
    protected $table = "job_vacancies";

    protected $fillable = [
        'job_title',
        'qualifications',
        'job_description',
        'company_name',
        'employment_type',
        'job_type',
        'apply_link',
        'location',
        'salary_start',
        'salary_end',
        'poster', // Assuming poster is a file path
        'job_banner', // Assuming job_banner is a file path
    ];

    protected $casts = [
        'salary_start' => 'float',
        'salary_end' => 'float',
    ];

    protected $appends = ['salary_start_rupiah', 'salary_end_rupiah', 'employment_type_formatted', 'job_type_formatted'];

    public function getSalaryStartRupiahAttribute(): string
    {
        return 'Rp ' . number_format($this->salary_start, 0, ',', '.');
    }

    public function getSalaryEndRupiahAttribute(): string
    {
        return 'Rp ' . number_format($this->salary_end, 0, ',', '.');
    }

    public function getEmploymentTypeFormattedAttribute(): string
    {
        // Replace underscores with spaces and capitalize words
        return ucwords(str_replace('_', ' ', $this->employment_type));
    }

    public function getJobTypeFormattedAttribute(): string
    {
        return ucwords(str_replace('_',' ', $this->job_type));
    }
}
