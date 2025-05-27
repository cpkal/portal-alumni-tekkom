<?php

use App\Http\Controllers\Alumni\DashboardController;
use App\Http\Controllers\Alumni\JobVacancyController;
use App\Http\Controllers\Alumni\MyNetworkController;
use App\Http\Controllers\Alumni\TracerStudyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [DashboardController::class, 'index'])->name('home')->middleware(['auth', 'verified']);

Route::get('tracer-study', [TracerStudyController::class, 'show'])->middleware(['auth', 'verified']);

Route::post('tracer-study', [TracerStudyController::class, 'store'])->name('tracer-study.post')->middleware(['auth', 'verified']);

Route::get('/my-networks', [MyNetworkController::class, 'index'])->name('networking')->middleware(['auth', 'verified']);

Route::get('forum-discussion', function() {
    return Inertia::render('alumni/forum');
})->name('forum-discussion')->middleware(['auth', 'verified']);

Route::get('events', function () {
    return Inertia::render('alumni/events');
})->name('events')->middleware(['auth', 'verified']);

Route::get('job-vacancies', [JobVacancyController::class, 'index'])->name('job-vacancies')->middleware(['auth', 'verified']);
Route::get('job-vacancies/{id}', [JobVacancyController::class, 'show'])->name('job-vacancies.show')->middleware(['auth', 'verified']);

Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('statistics', function () {
        return Inertia::render('statistics');
    })->name('statistics');

    Route::get('summary-survey', function () {
        return Inertia::render('summary-survey');
    })->name('summary-survey');

    Route::get('alumnis', function () {
        return Inertia::render('alumni-users');
    })->name('alumnis');

    Route::get('tracer-study', function() {
        return Inertia::render('tracer-study');
    })->name('tracer-study');

    Route::get('news', function() {
        return Inertia::render('news');
    })->name('news');

    Route::get('events', function() {
        return Inertia::render('event');
    })->name('events');

    Route::get('job-recruitments', function() {
        return Inertia::render('job-rec');
    })->name('job-recruitments');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
