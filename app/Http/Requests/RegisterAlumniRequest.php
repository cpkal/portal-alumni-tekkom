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
            'nim' => 'required|string|unique:'.Alumni::class,
            'graduation_year' => 'required',
            'active_phone_number' => 'required',
            'date_of_birth'=> 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama lengkap harus diisi',
            'email.required' => 'Email harus diisi',
            'password.required' => 'Password harus diisi',
            'nim.required' => 'NIM harus diisi',
            'graduation_year.required' => 'Tahun kelulusan harus diisi',
            'active_phone_number.required' => 'Nomor telepon aktif harus diisi',
            'date_of_birth.required' => 'Tanggal lahir harus diisi',
        ];
    }

    // public function userFields(): array
    // {
    //     return [
    //         'name'=> '',
    //         'email'=> Identical::class,
    //         'password'=> Identical::class,
    //     ];
    // }

    // public function alumniFields(): array
    // {
    //     return [
    //         'name' => Identical::class,
    //         'nim'=> Identical::class,
    //         'graduation_year'=> Identical::class,
    //         'active_phone_number'=> Identical::class,
    //         'date_of_birth'=> Identical::class,
    //     ];
    // }
}
