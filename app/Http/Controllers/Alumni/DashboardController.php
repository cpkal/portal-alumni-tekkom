<?php

namespace App\Http\Controllers\Alumni;

use App\Http\Controllers\Controller;
use App\Models\Alumni;
use App\Models\Event;
use App\Models\ForumQuestion;
use App\Models\JobVacancy;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {

        if(Auth::user()->role === 'admin') {
            return Inertia::render('redir');
        }

        // profile completeness
        // query if user already has project
        $alumni = Auth::user()->alumni;
        $has_project = $alumni->projects()->exists();
        $has_experience = $alumni->experiences()->exists();
        $has_education = $alumni->educations()->exists();
        $has_submitted_tracer_study = User::where('id', Auth::user()->id)->first()->tracerStudy()->exists();
        $tracer_study = User::where('id', Auth::user()->id)->first()->tracerStudy;
        
        // check if alumni nim, fullname, active_phone_number, date_of_birth, and short_description are filled
        $profile_completeness = [
            'has_nim' => !empty($alumni->nim),
            'has_fullname' => !empty($alumni->fullname),
            'has_active_phone_number' => !empty($alumni->active_phone_number),
            'has_date_of_birth' => !empty($alumni->date_of_birth),
            'has_short_description' => !empty($alumni->short_description),
            'has_project' => $has_project,
            'has_experience' => $has_experience,
            'has_education' => $has_education,
        ];
        
        // calculate completeness percentage
        $total_fields = count($profile_completeness);
        $filled_fields = array_filter($profile_completeness, function ($value) {
            return $value === true;
        });
        $completeness_percentage = (count($filled_fields) / $total_fields) * 100;
        $completeness_percentage = round($completeness_percentage, 2);
        // if completeness percentage is 100, set it to 99.99
        if ($completeness_percentage === 100) {
            $completeness_percentage = 99.99;
        }

        // get forum activity in last 7 days
        $forum_activity = Auth::user()->alumni->forumReplies()
            ->where('created_at', '>=', now()->subDays(7))
            ->count();

        // get 3 alumni randomly
        $alumnis = Alumni::inRandomOrder()->take(3)->get();

        // get random 3 forum questions and count replies
        // eager load user relation to avoid N+1 problem
        $forum_questions = ForumQuestion::with(['user', 'user.alumni'])
            ->withCount('replies')
            ->inRandomOrder()
            ->take(3)
            ->get();

        $job_vacancies = JobVacancy::limit(2)->get();

        // get 2 random events
        $events = Event::inRandomOrder()->take(2)->get();
        
        return Inertia::render('alumni/dashboard', [
            'job_vacancies' => $job_vacancies,
            'profile_completeness' => $profile_completeness,
            'completeness_percentage' => $completeness_percentage,
            'forum_activity' => $forum_activity,
            'alumnis' => $alumnis,
            'forum_questions' => $forum_questions,
            'events' => $events,
            'has_submitted_tracer_study' => $has_submitted_tracer_study,
            'tracer_study' => $tracer_study,
        ]);
    }
}
