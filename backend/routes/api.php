<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

Route::post('/submit-form', [FormController::class, 'submit']);
Route::post('/forms/save', [FormController::class, 'saveForm']);
Route::get('/forms/list', [FormController::class, 'listForms']);
Route::get('/forms/{id}', [FormController::class, 'fetchForm']);
Route::put('/forms/update/{id}', [FormController::class, 'updateForm']);