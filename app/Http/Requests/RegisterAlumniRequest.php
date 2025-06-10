<?php

namespace App\Http\Requests;

use App\Models\Alumni;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterAlumniRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'nim' => [
                'required',
                'string',
                'max:7',
                'unique:'.Alumni::class,
                'regex:/^(20|2[1-9]|[3-9][0-9])\d{5}$/'
            ],
            'graduation_year' => 'required',
            'active_phone_number' => 'required',
            'date_of_birth'=> 'required',
        ];
    }


    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Nama lengkap harus diisi',
            'email.required' => 'Email harus diisi',
            'email.email' => 'Format email tidak valid',
            'email.unique' => 'Email sudah terdaftar',
            'password.required' => 'Password harus diisi',
            'nim.max' => 'NIM harus terdiri dari 7 digit angka cth: 2023001',
            'nim.required' => 'NIM harus diisi',
            'nim.regex' => 'NIM harus terdiri dari 7 digit, dimulai dengan 20, 21, 22, 23, 24, 25, atau 26',
            'nim.unique' => 'NIM sudah terdaftar',
            'graduation_year.required' => 'Tahun kelulusan harus diisi',
            'active_phone_number.required' => 'Nomor telepon aktif harus diisi',
            'date_of_birth.required' => 'Tanggal lahir harus diisi',
        ];
    }
}
