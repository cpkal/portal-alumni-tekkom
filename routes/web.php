<?php

use App\Http\Controllers\Admin\BeritaController;
use App\Http\Controllers\Admin\EventController as AdminEventController;
use App\Http\Controllers\Admin\LokerController;
use App\Http\Controllers\Admin\TracerController;
use App\Http\Controllers\Alumni\DashboardController;
use App\Http\Controllers\Alumni\EventController;
use App\Http\Controllers\Alumni\ForumController;
use App\Http\Controllers\Alumni\JobVacancyController;
use App\Http\Controllers\Alumni\MeController;
use App\Http\Controllers\Alumni\MyNetworkController;
use App\Http\Controllers\Alumni\TracerStudyController;
use App\Http\Controllers\Alumni\UserController;
use App\Http\Middleware\VerifiedUser;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', VerifiedUser::class])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('home');
    Route::get('/profile/me', [MeController::class, 'index'])->name('profile.me');
    Route::get('/profile/me/edit', [MeController::class, 'edit'])->name('profile.me.edit');
    Route::post('/profile/me/update', [MeController::class, 'update'])->name('profile.me.update');
    Route::get('/profile/me/shortdesc/edit', [MeController::class, 'editShortDesc'])->name('profile.me.shortdesc.edit');
    Route::post('/profile/me/shortdesc/update', [MeController::class, 'updateShortDesc'])->name('profile.me.shortdesc.update');
    Route::get('/profile/me/experience/add', [MeController::class, 'addExperience'])->name('profile.me.experience.add');
    Route::post('/profile/me/experience/store', [MeController::class, 'storeExperience'])->name('profile.me.experience.store');
    Route::get('/profile/me/experience/{id}/edit', [MeController::class, 'editExperience'])->name('profile.me.experience.edit');
    Route::post('/profile/me/experience/{id}/update', [MeController::class, 'updateExperience'])->name('profile.me.experience.update');
    Route::delete('/profile/me/experience/{id}/delete', [MeController::class, 'deleteExperience'])->name('profile.me.experience.delete');
    Route::get('/profile/me/education/add', [MeController::class, 'addEducation'])->name('profile.me.education.add');
    Route::post('/profile/me/education/store', [MeController::class, 'storeEducation'])->name('profile.me.education.store');
    Route::get('/profile/me/education/{id}/edit', [MeController::class, 'editEducation'])->name('profile.me.education.edit');
    Route::post('/profile/me/education/{id}/update', [MeController::class, 'updateEducation'])->name('profile.me.education.update');
    Route::delete('/profile/me/education/{id}/delete', [MeController::class, 'deleteEducation'])->name('profile.me.education.delete');
    Route::get('/profile/me/project/add', [MeController::class, 'addProject'])->name('profile.me.project.add');
    Route::post('/profile/me/project/store', [MeController::class, 'storeProject'])->name('profile.me.project.store');
    Route::get('/profile/me/project/{id}/edit', [MeController::class, 'editProject'])->name('profile.me.project.edit');
    Route::post('/profile/me/project/{id}/update', [MeController::class, 'updateProject'])->name('profile.me.project.update');
    Route::delete('/profile/me/project/{id}/delete', [MeController::class, 'deleteProject'])->name('profile.me.project.delete');

    Route::get('tracer-study', [TracerStudyController::class, 'show'])->name('tracer-study.index');

    Route::post('tracer-study', [TracerStudyController::class, 'store'])->name('tracer-study.post');

    Route::get('/my-networks', [MyNetworkController::class, 'index'])->name('networking');

    Route::get('forum-discussion', [ForumController::class, 'show'])->name('forum');
    Route::get('forum-discussion/my-questions', [ForumController::class, 'myQuestions'])->name('forum.my-questions');
    Route::post('forum-discussion', [ForumController::class, 'store'])->name('forum.my-questions.store');
    Route::get('forum-discussion/{id}', [ForumController::class, 'showQuestion'])->name('forum.show');
    Route::post('forum-discussion/{id}/answer', [ForumController::class, 'storeAnswer'])->name('forum.my-questions.answer.store');
    // vote
    Route::post('forum-discussion/{id}/vote', [ForumController::class, 'vote'])->name('forum.vote');

    Route::get('events', [EventController::class, 'index'])->name('events');
    Route::post('events/register', [EventController::class, 'register'])->name('events.register');
    Route::get('events/registered', [EventController::class, 'registered'])->name('events.registered');

    Route::get('job-vacancies', [JobVacancyController::class, 'index'])->name('job-vacancies');
    Route::get('job-vacancies/{id}', [JobVacancyController::class, 'show'])->name('job-vacancies.show');
});

Route::prefix('admin')->middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard', [
            'title' => 'Dashboard Admin',
            'description' => 'Selamat datang di dashboard admin portal alumni',
        ]);
    })->name('admin.dashboard');

    Route::get('/users', [UserController::class, 'tabelUser'])->name('admin.user.tabelUser');
    Route::get('/users/create', [UserController::class, 'createUser'])->name('admin.user.create');
    Route::post('/users', [UserController::class, 'storeUser'])->name('admin.user.store');
    Route::get('/users/{id}/edit', [UserController::class, 'editUser'])->name('admin.user.edit');
    Route::put('/users/{id}', [UserController::class, 'updateUser'])->name('admin.user.update');
    Route::delete('/admin/users/{id}', [UserController::class, 'destroyUser'])->name('admin.user.destroy');
    Route::post('/admin/users/{id}/verify', [UserController::class, 'verifyUser'])->name('admin.user.verify');
    Route::get('/users/export', [UserController::class, 'export'])->name('admin.user.export');

    Route::get('/lowongan', [LokerController::class, 'tabelLoker'])->name('admin.lowongan.tabelLoker');
    Route::get('lowongan/create', [LokerController::class, 'createLoker'])->name('admin.lowongan.createLoker');
    Route::post('lowongan', [LokerController::class, 'store'])->name('admin.lowongan.store');
    Route::get('/lowongan/{id}/edit', [LokerController::class, 'editLoker'])->name('admin.lowongan.editLoker');
    Route::put('/lowongan/{id}', [LokerController::class, 'updateLoker'])->name('admin.lowongan.updateLoker');
    Route::delete('/admin/lowongan/{id}', [LokerController::class, 'destroy'])->name('admin.lowongan.destroy');

    Route::get('/berita', [BeritaController::class, 'tabelBerita'])->name('admin.berita.tabelBerita');
    Route::get('berita/create', [BeritaController::class, 'createBerita'])->name('admin.berita.createBerita');
    Route::post('berita', [BeritaController::class, 'store'])->name('admin.berita.store');
    Route::get('/berita/{id}/edit', [BeritaController::class, 'editBerita'])->name('admin.berita.editBerita');
    Route::put('/berita/{id}', [BeritaController::class, 'updateBerita'])->name('admin.berita.updateBerita');
    Route::delete('/admin/berita/{id}', [BeritaController::class, 'destroy'])->name('admin.berita.destroy');

    Route::get('/tracer', [TracerController::class, 'tabel'])->name('admin.tracer.tabelTracer');
    Route::get('/tracer/{id}/edit', [TracerController::class, 'edit'])->name('admin.tracer.edit');
    Route::put('/tracer/{id}', [TracerController::class, 'update'])->name('admin.tracer.update');
    Route::delete('/admin/tracer/{id}', [TracerController::class, 'destroy'])->name('admin.tracer.destroy');
    
    // approve, reject, show
    Route::get('/tracer/{id}/review', [TracerController::class, 'review'])->name('admin.tracer.review');
    Route::get('/tracer/{id}/reject', [TracerController::class, 'reject'])->name('admin.tracer.reject');
    Route::get('/tracer/{id}/show', [TracerController::class, 'show'])->name('admin.tracer.show');
    Route::get('/tracer/export', [TracerController::class, 'export'])->name('admin.tracer.export');

    Route::resource('events', AdminEventController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
