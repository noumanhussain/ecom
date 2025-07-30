<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get categories
        $electronics = Category::where('slug', 'electronics')->first();
        $smartphones = Category::where('slug', 'smartphones')->first();
        $laptops = Category::where('slug', 'laptops')->first();
        $clothing = Category::where('slug', 'clothing')->first();
        $mensClothing = Category::where('slug', 'mens-clothing')->first();
        $womensClothing = Category::where('slug', 'womens-clothing')->first();

        $products = [
            // Electronics - Smartphones
            [
                'name' => 'iPhone 15 Pro',
                'slug' => 'iphone-15-pro',
                'description' => 'The latest iPhone with advanced features and powerful performance.',
                'short_description' => 'Latest iPhone with Pro features',
                'price' => 999.99,
                'sale_price' => 899.99,
                'stock_quantity' => 50,
                'sku' => 'IPH15PRO-128',
                'weight' => 0.187,
                'dimensions' => '147.6x71.5x8.25',
                'featured_image' => 'https://via.placeholder.com/400x400?text=iPhone+15+Pro',
                'is_active' => true,
                'is_featured' => true,
                'is_on_sale' => true,
                'sale_start_date' => now(),
                'sale_end_date' => now()->addDays(30),
                'category_id' => $smartphones->id ?? $electronics->id,
            ],
            [
                'name' => 'Samsung Galaxy S24',
                'slug' => 'samsung-galaxy-s24',
                'description' => 'Premium Android smartphone with cutting-edge technology.',
                'short_description' => 'Premium Android smartphone',
                'price' => 899.99,
                'stock_quantity' => 35,
                'sku' => 'SAMS24-256',
                'weight' => 0.168,
                'dimensions' => '147.0x70.6x7.6',
                'featured_image' => 'https://via.placeholder.com/400x400?text=Samsung+Galaxy+S24',
                'is_active' => true,
                'is_featured' => true,
                'category_id' => $smartphones->id ?? $electronics->id,
            ],

            // Electronics - Laptops
            [
                'name' => 'MacBook Pro 14"',
                'slug' => 'macbook-pro-14',
                'description' => 'Powerful laptop for professionals with M3 chip.',
                'short_description' => 'Professional laptop with M3 chip',
                'price' => 1999.99,
                'sale_price' => 1799.99,
                'stock_quantity' => 25,
                'sku' => 'MBP14-M3-512',
                'weight' => 1.55,
                'dimensions' => '312.6x221.2x15.5',
                'featured_image' => 'https://via.placeholder.com/400x400?text=MacBook+Pro+14',
                'is_active' => true,
                'is_featured' => true,
                'is_on_sale' => true,
                'sale_start_date' => now(),
                'sale_end_date' => now()->addDays(45),
                'category_id' => $laptops->id ?? $electronics->id,
            ],
            [
                'name' => 'Dell XPS 13',
                'slug' => 'dell-xps-13',
                'description' => 'Ultra-thin laptop with premium design and performance.',
                'short_description' => 'Ultra-thin premium laptop',
                'price' => 1299.99,
                'stock_quantity' => 30,
                'sku' => 'DELLXPS13-512',
                'weight' => 1.17,
                'dimensions' => '295.7x199.8x14.8',
                'featured_image' => 'https://via.placeholder.com/400x400?text=Dell+XPS+13',
                'is_active' => true,
                'category_id' => $laptops->id ?? $electronics->id,
            ],

            // Clothing - Men's
            [
                'name' => 'Classic White T-Shirt',
                'slug' => 'classic-white-tshirt',
                'description' => 'Premium cotton t-shirt perfect for everyday wear.',
                'short_description' => 'Premium cotton t-shirt',
                'price' => 29.99,
                'sale_price' => 19.99,
                'stock_quantity' => 100,
                'sku' => 'TSHIRT-WHITE-M',
                'weight' => 0.2,
                'featured_image' => 'https://via.placeholder.com/400x400?text=White+T-Shirt',
                'is_active' => true,
                'is_on_sale' => true,
                'sale_start_date' => now(),
                'sale_end_date' => now()->addDays(60),
                'category_id' => $mensClothing->id ?? $clothing->id,
            ],
            [
                'name' => 'Denim Jeans',
                'slug' => 'denim-jeans',
                'description' => 'Comfortable denim jeans with modern fit.',
                'short_description' => 'Comfortable denim jeans',
                'price' => 79.99,
                'stock_quantity' => 75,
                'sku' => 'JEANS-DENIM-32',
                'weight' => 0.5,
                'featured_image' => 'https://via.placeholder.com/400x400?text=Denim+Jeans',
                'is_active' => true,
                'category_id' => $mensClothing->id ?? $clothing->id,
            ],

            // Clothing - Women's
            [
                'name' => 'Summer Dress',
                'slug' => 'summer-dress',
                'description' => 'Elegant summer dress perfect for warm weather.',
                'short_description' => 'Elegant summer dress',
                'price' => 89.99,
                'sale_price' => 69.99,
                'stock_quantity' => 60,
                'sku' => 'DRESS-SUMMER-M',
                'weight' => 0.3,
                'featured_image' => 'https://via.placeholder.com/400x400?text=Summer+Dress',
                'is_active' => true,
                'is_featured' => true,
                'is_on_sale' => true,
                'sale_start_date' => now(),
                'sale_end_date' => now()->addDays(90),
                'category_id' => $womensClothing->id ?? $clothing->id,
            ],
            [
                'name' => 'Blouse',
                'slug' => 'blouse',
                'description' => 'Professional blouse suitable for office wear.',
                'short_description' => 'Professional office blouse',
                'price' => 59.99,
                'stock_quantity' => 45,
                'sku' => 'BLOUSE-PROF-L',
                'weight' => 0.25,
                'featured_image' => 'https://via.placeholder.com/400x400?text=Blouse',
                'is_active' => true,
                'category_id' => $womensClothing->id ?? $clothing->id,
            ],
        ];

        foreach ($products as $productData) {
            Product::create($productData);
        }
    }
}
