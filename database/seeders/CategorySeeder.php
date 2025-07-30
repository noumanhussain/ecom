<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Electronics',
                'slug' => 'electronics',
                'description' => 'Latest electronic gadgets and devices',
                'sort_order' => 1,
            ],
            [
                'name' => 'Clothing',
                'slug' => 'clothing',
                'description' => 'Fashion and apparel for all ages',
                'sort_order' => 2,
            ],
            [
                'name' => 'Home & Garden',
                'slug' => 'home-garden',
                'description' => 'Everything for your home and garden',
                'sort_order' => 3,
            ],
            [
                'name' => 'Sports & Outdoors',
                'slug' => 'sports-outdoors',
                'description' => 'Sports equipment and outdoor gear',
                'sort_order' => 4,
            ],
            [
                'name' => 'Books',
                'slug' => 'books',
                'description' => 'Books for all ages and interests',
                'sort_order' => 5,
            ],
            [
                'name' => 'Toys & Games',
                'slug' => 'toys-games',
                'description' => 'Fun toys and games for everyone',
                'sort_order' => 6,
            ],
        ];

        foreach ($categories as $categoryData) {
            Category::create($categoryData);
        }

        // Create some subcategories
        $electronics = Category::where('slug', 'electronics')->first();
        if ($electronics) {
            Category::create([
                'name' => 'Smartphones',
                'slug' => 'smartphones',
                'description' => 'Latest smartphones and mobile devices',
                'parent_id' => $electronics->id,
                'sort_order' => 1,
            ]);

            Category::create([
                'name' => 'Laptops',
                'slug' => 'laptops',
                'description' => 'Portable computers and laptops',
                'parent_id' => $electronics->id,
                'sort_order' => 2,
            ]);

            Category::create([
                'name' => 'Accessories',
                'slug' => 'electronics-accessories',
                'description' => 'Electronic accessories and peripherals',
                'parent_id' => $electronics->id,
                'sort_order' => 3,
            ]);
        }

        $clothing = Category::where('slug', 'clothing')->first();
        if ($clothing) {
            Category::create([
                'name' => 'Men\'s Clothing',
                'slug' => 'mens-clothing',
                'description' => 'Fashion for men',
                'parent_id' => $clothing->id,
                'sort_order' => 1,
            ]);

            Category::create([
                'name' => 'Women\'s Clothing',
                'slug' => 'womens-clothing',
                'description' => 'Fashion for women',
                'parent_id' => $clothing->id,
                'sort_order' => 2,
            ]);

            Category::create([
                'name' => 'Kids\' Clothing',
                'slug' => 'kids-clothing',
                'description' => 'Fashion for children',
                'parent_id' => $clothing->id,
                'sort_order' => 3,
            ]);
        }
    }
}
