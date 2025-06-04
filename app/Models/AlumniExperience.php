<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AlumniExperience extends Model
{
    protected $table = "alumni_experiences";

    // format start_date and end_date to Jan 2020
    // protected $casts = [
    //     'start_date' => 'date',
    //     'end_date' => 'date',
    // ];
    protected $fillable = [
        'alumni_id',
        'company_name',
        'job_title',
        'start_date',
        'end_date',
        'employment_type',
        'job_description',
    ];
    // belongs to alumni
    public function alumni()
    {
        return $this->belongsTo(Alumni::class, 'alumni_id');
    }
    // format start_date and end_date to Jan 2020
    public function getFormattedStartDateAttribute()
    {
        return $this->start_date ? $this->start_date->format('M Y') : null;
    }
    public function getFormattedEndDateAttribute()
    {
        return $this->end_date ? $this->end_date->format('M Y') : 'sekarang';
    }
    public function getEmploymentTypeLabelAttribute()
    {
        switch ($this->employment_type) {
            case 'full_time':
                return 'Full Time';
            case 'part_time':
                return 'Part Time';
            case 'internship':
                return 'Internship';
            case 'freelance':
                return 'Freelance';
            default:
                return 'Tidak Diketahui';
        }
    }
}
