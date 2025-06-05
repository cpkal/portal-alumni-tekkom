<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\Alumni;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    public function tabelUser()
    {
        // Logic to retrieve and display the list of users
        $users = User::paginate(10); // Example pagination
        return view('admin.user.tabelUser', compact('users'));
    }
    public function createUser()
    {
        // Logic to show the form for creating a new user
        return view('admin.user.formUser', [
            'user' => null,
            'acc_type' => request()->query('acc_type', 'alumni') // Default to 'alumni'
        ]);
    }
    public function storeUser(Request $request)
    {
        $user = new User();
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        $user->is_verified = $request->input('is_verified') == 'on' ? true : false;
        $user->name = $request->input('name');
        $user->save();

        if($request->input('acc_type') === 'admin') {
            $user->role = 'admin';
            $user->save();
        } else {
            $user->role = 'alumni';
            $user->save();
            $alumni = new Alumni();
            $alumni->user_id = $user->id;
            $alumni->fullname = $request->input('fullname');
            $alumni->nim = $request->input('nim');
            $alumni->graduation_year = $request->input('graduation_year');
            $alumni->active_phone_number = $request->input('active_phone_number');
            $alumni->date_of_birth = $request->input('date_of_birth');
            $alumni->short_description = $request->input('short_description');
            $alumni->save();
        }
        
        return redirect()->route('admin.user.tabelUser')->with('success', 'User berhasil ditambahkan.');
    }
    public function editUser($id)
    {
        return view('admin.user.formUser', [
            'user' => User::findOrFail($id),
            'alumni' => Alumni::where('user_id', $id)->first(),
            'acc_type' => request()->query('acc_type', 'alumni') // Default to 'alumni'
        ]);
    }
    public function updateUser(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->email = $request->input('email');
        if ($request->input('password')) {
            $user->password = bcrypt($request->input('password'));
        }
        $user->is_verified = $request->input('is_verified') == 'on' ? true : false;
        $user->name = $request->input('name');
        $user->save();

        if($request->input('acc_type') === 'admin') {
            $user->role = 'admin';
            $user->save();
        } else {
            $user->role = 'alumni';
            $user->save();
            $alumni = Alumni::where('user_id', $id)->first();
            if (!$alumni) {
                $alumni = new Alumni();
                $alumni->user_id = $id;
            }
            $alumni->fullname = $request->input('fullname');
            $alumni->nim = $request->input('nim');
            $alumni->graduation_year = $request->input('graduation_year');
            $alumni->active_phone_number = $request->input('active_phone_number');
            $alumni->date_of_birth = $request->input('date_of_birth');
            $alumni->short_description = $request->input('short_description');
            $alumni->save();
        }

        return redirect()->route('admin.user.tabelUser')->with('success', 'User berhasil diperbarui.');
    }
    public function destroyUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        // Optionally delete related Alumni record
        $alumni = Alumni::where('user_id', $id)->first();
        if ($alumni) {
            $alumni->delete();
        }

        return redirect()->route('admin.user.tabelUser')->with('success', 'User berhasil dihapus.');
    }

    public function verifyUser($id)
    {
        $user = User::findOrFail($id);
        $user->is_verified = true;
        $user->save();

        return redirect()->route('admin.user.tabelUser')->with('success', 'User berhasil diverifikasi.');
    }

    public function export()
    {
        return Excel::download(new \App\Exports\AlumniExport, 'alumni.xlsx');
    }
}
