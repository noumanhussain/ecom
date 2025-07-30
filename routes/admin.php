<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\AuthController;

// Admin Routes - All routes are protected with auth middleware
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {

    // Admin Dashboard
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Admin Logout
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Admin Users Management (example)
    Route::get('/users', function () {
        return Inertia::render('Admin/Users/Index');
    })->name('users.index');

    Route::get('/users/create', function () {
        return Inertia::render('Admin/Users/Create');
    })->name('users.create');

    // Admin Settings (example)
    Route::get('/settings', function () {
        return Inertia::render('Admin/Settings/Index');
    })->name('settings.index');

    // Admin Profile (example)
    Route::get('/profile', function () {
        return Inertia::render('Admin/Profile/Index');
    })->name('profile.index');
});
