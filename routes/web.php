<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Web\ProductController;

// Include Admin Routes
require __DIR__ . '/admin.php';

// Public Website Routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/products', [ProductController::class, 'index'])->name('products');
// About Page
Route::get('/about', function () {
    return Inertia::render('Web/About');
})->name('about');

// Contact Page
Route::get('/contact', function () {
    return Inertia::render('Web/Contact');
})->name('contact');

// Authentication Routes (Public)
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::get('/{slug}', [ProductController::class, 'show'])
    ->where('slug', '^(?!login$|register$|about$|contact$|dashboard$).+')
    ->name('products.show');

// User Dashboard (Protected)
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Web/Dashboard');
    })->name('dashboard');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
