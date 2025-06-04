<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AlumniProject extends Model
{
    protected $table = "alumni_projects";

    protected $fillable = [
        'alumni_id',
        'title',
        'description',
        'start_date',
        'end_date',
        'url',
    ];
}
