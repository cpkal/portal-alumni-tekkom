<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AlumniEducation extends Model
{
    protected $table = "alumni_educations";

    protected $fillable = [
        'alumni_id',
        'institution_name',
        'degree',
        'field_of_study',
        'start_year',
        'end_year',
    ];
}
