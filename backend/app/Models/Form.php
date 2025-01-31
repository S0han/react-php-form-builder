<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    // Define the table name (optional, Laravel will use the plural of the class name by default)
    protected $table = 'forms';

    // Define fillable fields (to allow mass assignment)
    protected $fillable = ['form_name', 'form_data'];

    // Cast the form_data field to an array
    protected $casts = [
        'form_data' => 'array',
    ];
}