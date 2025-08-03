<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Web/Products/Products');
    }

    public function show($slug)
    {
        // return Inertia::render('Web/Products/Products');

        $category = Category::where('slug', $slug)->first();
        $products = Product::where('category_id', $category->id)->get();

        return Inertia::render('Web/Products/Products', ['category' => $category, 'products' => $products]);
    }
}
