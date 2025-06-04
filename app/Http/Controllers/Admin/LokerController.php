<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobVacancy;
use App\Models\Lowongan;
use Illuminate\Http\Request;

class LokerController extends Controller
{
    //
    public function tabelLoker()
    {
        $lowongans = JobVacancy::paginate(10);
        return view('admin.lowongan.tabelLoker', compact('lowongans'));
    }

    public function createLoker()
    {
        return view('admin.lowongan.formLoker', ['lowongans' => null]);
    }

    

    public function store(Request $request)
    {
        $request->validate([
            'job_title' => 'required|string|max:255',
            'qualifications' => 'nullable|string',
            'job_description' => 'nullable|string',
            'company_name' => 'required|string|max:255',
            'employment_type' => 'required|in:full_time,part_time,internship,freelance',
            'job_type' => 'required|in:remote,on_site,hybrid',
            'apply_link' => 'required|url',
            'location' => 'required|string|max:255',
            'salary_start' => 'nullable|numeric|min:0',
            'salary_end' => 'nullable|numeric|min:0',
            'job_banner' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'poster' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $job = JobVacancy::create([
            'job_title' => $request->job_title,
            'qualifications' => $request->qualifications,
            'job_description' => $request->job_description,
            'company_name' => $request->company_name,
            'employment_type' => $request->employment_type,
            'job_type' => $request->job_type,
            'apply_link' => $request->apply_link,
            'location' => $request->location,
            'salary_start' => $request->salary_start,
            'salary_end' => $request->salary_end,
            'poster' => $request->poster ? $request->poster->store('posters', 'public') : null,
        ]);

        // Handle job banner upload if it exists
        if ($request->hasFile('job_banner')) {
            $jobBannerPath = $request->file('job_banner')->store('job_banners', 'public');
            // You can save the job banner path to the database if needed
            //save path
            $job->job_banner = $jobBannerPath;
            $job->save();
            
        }

        // Handle poster upload if it exists
        if ($request->hasFile('poster')) {
            $posterPath = $request->file('poster')->store('posters', 'public');
            // You can save the poster path to the database if needed
            $job->poster = $posterPath;
            $job->save();
        }        

        return redirect()->route('admin.lowongan.tabelLoker')->with('success', 'Lowongan berhasil ditambahkan!');
    }

    public function editLoker($id)
        {
            $lowongans = JobVacancy::findOrFail($id);
            return view('admin.lowongan.formLoker', compact('lowongans'));
        }

        public function updateLoker(Request $request, $id)
        {
            $request->validate([
                'job_title' => 'required|string|max:255',
                'qualifications' => 'nullable|string',
                'job_description' => 'nullable|string',
                'company_name' => 'required|string|max:255',
                'employment_type' => 'required|in:full_time,part_time,internship,freelance',
                'job_type' => 'required|in:remote,on_site,hybrid',
                'apply_link' => 'required|url',
                'location' => 'required|string|max:255',
                'salary_start' => 'nullable|numeric|min:0',
                'salary_end' => 'nullable|numeric|min:0',
                'job_banner' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'poster' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            $lowongans = JobVacancy::findOrFail($id);
            $lowongans->update([
                'job_title' => $request->job_title,
                'qualifications' => $request->qualifications,
                'job_description' => $request->job_description,
                'company_name' => $request->company_name,
                'employment_type' => $request->employment_type,
                'job_type' => $request->job_type,
                'apply_link' => $request->apply_link,
                'location' => $request->location,
                'salary_start' => $request->salary_start,
                'salary_end' => $request->salary_end,
            ]);

            return redirect()->route('admin.lowongan.tabelLoker')->with('success', 'Lowongan berhasil diperbarui.');
        }
   

    public function destroy($id)
    {
        $lowongans = JobVacancy::findOrFail($id);
        $lowongans->delete();

        return redirect()->route('admin.lowongan.tabelLoker')->with('success', 'Lowongan berhasil dihapus.');
    }


}
