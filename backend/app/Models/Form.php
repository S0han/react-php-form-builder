<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    protected $table = 'forms';

    protected $fillable = ['form_name', 'form_data'];

    protected $casts = [
        'form_data' => 'array',
    ];
}