<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        return response()->json([
            'message' => 'Form submitted successfully!',
            'data' => $validated,
        ]);
    }

    public function saveForm(Request $request)
    {
        $validated = $request->validate([
            'form_name' => 'required|string|max:255',
            'form_data' => 'required|json',
        ]);

        // Save the form to the database
        $form = Form::create([
            'form_name' => $validated['form_name'],
            'form_data' => $validated['form_data'],
        ]);

        return response()->json([
            'message' => 'Form saved successfully!',
            'form' => $form,
        ], 201);
    }
}