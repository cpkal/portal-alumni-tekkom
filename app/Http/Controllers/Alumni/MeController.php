<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\Alumni;
use App\Models\AlumniEducation;
use App\Models\AlumniExperience;
use App\Models\AlumniProject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MeController extends Controller
{
    public function index()
    {
        
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());

        return Inertia::render('alumni/me', [
            'user' => $user,
            'showEditBio' => false,
        ]);
    }

    public function edit(Request $request)
    {
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());
        return Inertia::render('alumni/me', [
            'user' => $user,
            'showEditBio' => true,
        ]);
    }

    public function update(Request $request)
    {
        $user = User::find(Auth::id());
        $alumni = Alumni::where('user_id', $user->id)->first();

        $alumni->fullname = $request->input('full_name');
        $alumni->active_phone_number = $request->input('active_phone_number');
        $alumni->save();

        return redirect()->route('profile.me')->with('success', 'Profil berhasil diperbarui.');
    }

    public function editShortDesc()
    {
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());

        return Inertia::render('alumni/me', [
            'user' => $user,
            'showEditShortDesc' => true,
        ]);
    }

    public function updateShortDesc(Request $request)
    {
        $user = User::find(Auth::id());
        $alumni = Alumni::where('user_id', $user->id)->first();

        $alumni->short_description = $request->input('short_description');
        $alumni->save();

        return redirect()->route('profile.me')->with('success', 'Deskripsi singkat berhasil diperbarui.');
    }

    public function addExperience()
    {
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());

        return Inertia::render('alumni/me', [
            'user' => $user,
            'showAddExperience' => true,
        ]);
    }

    public function storeExperience(Request $request)
    {
        $user = User::find(Auth::id());
        $alumni = Alumni::where('user_id', $user->id)->first();

        $experience = new AlumniExperience();
        $experience->alumni_id = $alumni->id;
        $experience->company_name = $request->input('company_name');
        $experience->job_title = $request->input('job_title');
        $experience->start_date = $request->input('start_date');
        $experience->end_date = $request->input('end_date');
        $experience->location = $request->input('location');
        $experience->job_description = $request->input('job_description');
        $experience->employment_type = $request->input('employment_type');
        $experience->save();

        return redirect()->route('profile.me')->with('success', 'Pengalaman kerja berhasil ditambahkan.');
    }

    public function deleteExperience($id)
    {
        $experience = AlumniExperience::findOrFail($id);
        $experience->delete();

        return redirect()->route('profile.me')->with('success', 'Pengalaman kerja berhasil dihapus.');
    }

    public function editExperience($id)
    {
        $experience = AlumniExperience::findOrFail($id);
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());

        return Inertia::render('alumni/me', [
            'user' => $user,
            'showEditExperience' => true,
            'experience' => $experience,
        ]);
    }

    public function updateExperience(Request $request, $id)
    {
        $experience = AlumniExperience::findOrFail($id);
        $experience->company_name = $request->input('company_name');
        $experience->job_title = $request->input('job_title');
        $experience->start_date = $request->input('start_date');
        $experience->end_date = $request->input('end_date');
        $experience->location = $request->input('location');
        $experience->job_description = $request->input('job_description');
        $experience->employment_type = $request->input('employment_type');
        $experience->save();

        return redirect()->route('profile.me')->with('success', 'Pengalaman kerja berhasil diperbarui.');
    }

    public function addEducation()
    {
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());

        return Inertia::render('alumni/me', [
            'user' => $user,
            'showAddEducation' => true,
        ]);
    }

    public function storeEducation(Request $request)
    {
        $user = User::find(Auth::id());
        $alumni = Alumni::where('user_id', $user->id)->first();

        $education = new AlumniEducation();
        $education->alumni_id = $alumni->id;
        $education->institution_name = $request->input('institution_name');
        $education->degree = $request->input('degree');
        $education->major = $request->input('major');
        $education->start_year = $request->input('start_year');
        $education->end_year = $request->input('end_year');
        $education->gpa = $request->input('gpa');
        $education->activities = $request->input('activities');
        $education->description = $request->input('description');
        $education->save();

        return redirect()->route('profile.me')->with('success', 'Riwayat pendidikan berhasil ditambahkan.');
    }

    public function editEducation($id)
    {
        $education = AlumniEducation::findOrFail($id);
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());

        return Inertia::render('alumni/me', [
            'user' => $user,
            'showEditEducation' => true,
            'education' => $education,
        ]);
    }

    public function updateEducation(Request $request, $id)
    {
        $education = AlumniEducation::findOrFail($id);
        $education->institution_name = $request->input('institution_name');
        $education->degree = $request->input('degree');
        $education->major = $request->input('major');
        $education->start_year = $request->input('start_year');
        $education->end_year = $request->input('end_year');
        $education->gpa = $request->input('gpa');
        $education->activities = $request->input('activities');
        $education->description = $request->input('description');
        $education->save();

        return redirect()->route('profile.me')->with('success', 'Riwayat pendidikan berhasil diperbarui.');
    }

    public function deleteEducation($id)
    {
        $education = AlumniEducation::findOrFail($id);
        $education->delete();

        return redirect()->route('profile.me')->with('success', 'Riwayat pendidikan berhasil dihapus.');
    }

    public function addProject()
    {
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());

        return Inertia::render('alumni/me', [
            'user' => $user,
            'showAddProject' => true,
        ]);
    }

    public function storeProject(Request $request)
    {
        $user = User::find(Auth::id());
        $alumni = Alumni::where('user_id', $user->id)->first();

        $project = new AlumniProject();
        $project->alumni_id = $alumni->id;
        $project->project_name = $request->input('project_name');
        $project->description = $request->input('description');
        $project->start_date = $request->input('start_date');
        $project->end_date = $request->input('end_date');
        $project->save();

        return redirect()->route('profile.me')->with('success', 'Proyek berhasil ditambahkan.');
    }

    public function editProject($id)
    {
        $project = AlumniProject::findOrFail($id);
        $user = User::with(['alumni', 'alumni.experiences', 'alumni.educations', 'alumni.projects'])
            ->find(Auth::id());

        return Inertia::render('alumni/me', [
            'user' => $user,
            'showEditProject' => true,
            'project' => $project,
        ]);
    }

    public function updateProject(Request $request, $id)
    {
        $project = AlumniProject::findOrFail($id);
        $project->project_name = $request->input('project_name');
        $project->description = $request->input('description');
        $project->start_date = $request->input('start_date');
        $project->end_date = $request->input('end_date');
        $project->save();

        return redirect()->route('profile.me')->with('success', 'Proyek berhasil diperbarui.');
    }

    public function deleteProject($id)
    {
        $project = AlumniProject::findOrFail($id);
        $project->delete();

        return redirect()->route('profile.me')->with('success', 'Proyek berhasil dihapus.');
    }
}
