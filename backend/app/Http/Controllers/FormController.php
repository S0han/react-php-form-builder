<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;

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

        $form = Form::create([
            'form_name' => $validated['form_name'],
            'form_data' => $validated['form_data'],
        ]);

        return response()->json([
            'message' => 'Form saved successfully!',
            'form' => $form,
        ], 201);
    }

    public function listForms()
    {
        $forms = Form::all();

        return response()->json($forms);
    }

    public function fetchForm($id)
    {
        $form = Form::find($id);

        if (!$form) {
            return response()->json(['message' => 'Form not found'], 404);
        }

        return response()->json($form);
    }
}