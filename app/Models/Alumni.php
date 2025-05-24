<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    protected $table = "alumnis";

    protected $fillable = [
        'user_id',
        'fullname',
        'nim',
        'graduation_year',
        'active_phone_number',
        'date_of_birth',
    ];
    
}
