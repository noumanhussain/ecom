import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Products() {
    const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
    const [sortBy, setSortBy] = useState("featured");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [priceRange, setPriceRange] = useState([0, 2000]);

    const categories = [
        { id: "all", name: "All Products" },
        { id: "face-wash", name: "Face Wash" },
        { id: "serums", name: "Serums" },
        { id: "hair-care", name: "Hair Care" },
        { id: "skincare", name: "Skincare" },
        { id: "body-care", name: "Body Care" },
        { id: "essential-oils", name: "Essential Oils" },
        { id: "face-cream", name: "Face Cream" },
        { id: "face-masks", name: "Face Masks" },
        { id: "sunscreen", name: "Sunscreen" },
    ];

    const sortOptions = [
        { value: "featured", label: "Featured" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "name-asc", label: "Name: A to Z" },
        { value: "name-desc", label: "Name: Z to A" },
        { value: "newest", label: "Newest First" },
        { value: "rating", label: "Highest Rated" },
    ];

    const products = [
        {
            id: 1,
            name: "Rosemary & Onion Shampoo",
            brand: "CONATURAL",
            price: 1900,
            originalPrice: 1900,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
            category: "hair-care",
            rating: 4.8,
            reviews: 124,
            badge: "BEST SELLER",
            inStock: true,
            description:
                "Anti-Pollution, Hydration & growth formula for healthy hair. 91% NATURAL, INFUSED WITH SEAWEED, FREE FROM PARABENS SULPHATES",
        },
        {
            id: 2,
            name: "Rosemary & Onion Conditioner",
            brand: "CONATURAL",
            price: 1900,
            originalPrice: 1900,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
            category: "hair-care",
            rating: 4.9,
            reviews: 89,
            badge: "NEW",
            inStock: true,
            description:
                "Nourishing & strengthening formula for smooth & healthy hair. 95% NATURAL, INFUSED WITH ONION & ROSEMARY EXTRACT, FREE FROM PARABENS SULPHATES",
        },
        {
            id: 3,
            name: "Hair Coloring Shampoo - Intense Brown",
            brand: "CONATURAL",
            price: 2950,
            originalPrice: 2950,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
            category: "hair-care",
            rating: 4.7,
            reviews: 156,
            badge: "POPULAR",
            inStock: true,
            description:
                "RESULTS IN 10 MINUTES, FOR STUBBORN GREY HAIR, FOR ALL HAIR TYPES, AMMONIA FREE, LONG-LASTING INTENSITY, ENRICHED WITH COCONUT & ARGAN OIL. 200ml e 6.7 fl.oz.",
        },
        {
            id: 4,
            name: "Vitamin E Face Wash",
            brand: "CONATURAL",
            price: 998,
            originalPrice: 1299,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
            category: "face-wash",
            rating: 4.8,
            reviews: 124,
            badge: "BEST SELLER",
            inStock: true,
            description:
                "Gentle cleansing with natural Vitamin E for healthy, glowing skin.",
        },
        {
            id: 5,
            name: "Organic Rose Serum",
            brand: "CONATURAL",
            price: 1499,
            originalPrice: 1899,
            image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
            category: "serums",
            rating: 4.9,
            reviews: 89,
            badge: "NEW",
            inStock: true,
            description:
                "Anti-aging serum with organic rose extract for youthful skin.",
        },
        {
            id: 6,
            name: "Tea Tree & Neem Face Wash",
            brand: "CONATURAL",
            price: 480,
            originalPrice: 599,
            image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop&crop=center",
            category: "face-wash",
            rating: 4.7,
            reviews: 156,
            badge: "POPULAR",
            inStock: true,
            description:
                "Deep cleansing face wash with tea tree and neem for acne-prone skin.",
        },
        {
            id: 7,
            name: "Hair Growth Shampoo",
            brand: "CONATURAL",
            price: 1615,
            originalPrice: 1999,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
            category: "hair-care",
            rating: 4.6,
            reviews: 203,
            badge: "SALE",
            inStock: true,
            description:
                "Natural hair growth shampoo with biotin and essential oils.",
        },
        {
            id: 8,
            name: "Aloe Vera Gel",
            brand: "CONATURAL",
            price: 599,
            originalPrice: 799,
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
            category: "skincare",
            rating: 4.5,
            reviews: 78,
            badge: "ORGANIC",
            inStock: true,
            description:
                "Pure aloe vera gel for soothing and moisturizing skin.",
        },
        {
            id: 9,
            name: "Lavender Essential Oil",
            brand: "CONATURAL",
            price: 799,
            originalPrice: 999,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center",
            category: "essential-oils",
            rating: 4.9,
            reviews: 95,
            badge: "PREMIUM",
            inStock: false,
            description:
                "Pure lavender essential oil for relaxation and skincare.",
        },
        {
            id: 10,
            name: "Vitamin C Cream",
            brand: "CONATURAL",
            price: 899,
            originalPrice: 1199,
            image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
            category: "face-cream",
            rating: 4.7,
            reviews: 167,
            badge: "LIMITED",
            inStock: true,
            description:
                "Brightening face cream with Vitamin C for radiant skin.",
        },
        {
            id: 11,
            name: "Coconut Body Lotion",
            brand: "CONATURAL",
            price: 699,
            originalPrice: 899,
            image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop&crop=center",
            category: "body-care",
            rating: 4.8,
            reviews: 142,
            badge: "BEST SELLER",
            inStock: true,
            description:
                "Nourishing body lotion with coconut oil for soft skin.",
        },
        {
            id: 12,
            name: "Tea Tree Face Mask",
            brand: "CONATURAL",
            price: 399,
            originalPrice: 499,
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
            category: "face-masks",
            rating: 4.4,
            reviews: 67,
            badge: "NEW",
            inStock: true,
            description:
                "Purifying face mask with tea tree for clear, healthy skin.",
        },
    ];

    const getBadgeColor = (badge) => {
        switch (badge) {
            case "BEST SELLER":
                return "bg-red-500 text-white";
            case "NEW":
                return "bg-green-500 text-white";
            case "SALE":
                return "bg-orange-500 text-white";
            case "POPULAR":
                return "bg-purple-500 text-white";
            case "LIMITED":
                return "bg-yellow-500 text-black";
            case "ORGANIC":
                return "bg-emerald-500 text-white";
            case "PREMIUM":
                return "bg-blue-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    const filteredProducts = products.filter((product) => {
        const categoryMatch =
            selectedCategory === "all" || product.category === selectedCategory;
        const priceMatch =
            product.price >= priceRange[0] && product.price <= priceRange[1];
        return categoryMatch && priceMatch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price;
            case "price-high":
                return b.price - a.price;
            case "name-asc":
                return a.name.localeCompare(b.name);
            case "name-desc":
                return b.name.localeCompare(a.name);
            case "newest":
                return b.id - a.id;
            case "rating":
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Products
                            </h1>
                            <p className="text-gray-600">
                                Discover our natural beauty collection
                            </p>
                        </div>
                        <div className="text-sm text-gray-500">
                            Showing {sortedProducts.length} of {products.length}{" "}
                            products
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Toolbar */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        {/* View Mode Toggle */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">
                                VIEW AS:
                            </span>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2 rounded-lg transition-colors duration-300 ${
                                    viewMode === "grid"
                                        ? "bg-[#367C7C] text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                                aria-label="Grid view"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-lg transition-colors duration-300 ${
                                    viewMode === "list"
                                        ? "bg-[#367C7C] text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                                aria-label="List view"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                                </svg>
                            </button>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">
                                SORT BY:
                            </span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-[#367C7C]"
                            >
                                {sortOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div
                    className={
                        viewMode === "grid"
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            : "space-y-4"
                    }
                >
                    {sortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className={`bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 ${
                                viewMode === "list" ? "flex" : ""
                            }`}
                        >
                            {/* Product Image */}
                            <div
                                className={`relative ${
                                    viewMode === "list"
                                        ? "w-48 flex-shrink-0"
                                        : ""
                                }`}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={`object-cover ${
                                        viewMode === "list"
                                            ? "w-full h-48"
                                            : "w-full h-64"
                                    }`}
                                    loading="lazy"
                                />

                                {/* Badge */}
                                <div
                                    className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${getBadgeColor(
                                        product.badge
                                    )}`}
                                >
                                    {product.badge}
                                </div>

                                {/* Out of Stock Overlay */}
                                {!product.inStock && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <span className="text-white font-semibold">
                                            Out of Stock
                                        </span>
                                    </div>
                                )}

                                {/* Quick Actions */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                                        <svg
                                            className="w-5 h-5 text-gray-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div
                                className={`p-4 ${
                                    viewMode === "list" ? "flex-1" : ""
                                }`}
                            >
                                {/* Category */}
                                <p className="text-sm text-gray-500 mb-1 capitalize">
                                    {product.category.replace("-", " ")}
                                </p>

                                {/* Brand */}
                                <p className="text-sm font-medium text-[#367C7C] mb-2">
                                    {product.brand}
                                </p>

                                {/* Product Name */}
                                <h3
                                    className={`font-semibold text-gray-900 mb-2 ${
                                        viewMode === "list"
                                            ? "text-lg"
                                            : "text-base"
                                    }`}
                                >
                                    {product.name}
                                </h3>

                                {/* Description (List View Only) */}
                                {viewMode === "list" && (
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {product.description}
                                    </p>
                                )}

                                {/* Rating */}
                                <div className="flex items-center mb-3">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${
                                                    i <
                                                    Math.floor(product.rating)
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600 ml-2">
                                        {product.rating} ({product.reviews})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl font-bold text-gray-900">
                                            Rs.{product.price}
                                        </span>
                                        {product.originalPrice >
                                            product.price && (
                                            <span className="text-sm text-gray-500 line-through">
                                                Rs.
                                                {product.originalPrice}
                                            </span>
                                        )}
                                    </div>

                                    {/* Discount Percentage */}
                                    {product.originalPrice > product.price && (
                                        <span className="text-sm font-semibold text-green-600">
                                            {Math.round(
                                                ((product.originalPrice -
                                                    product.price) /
                                                    product.originalPrice) *
                                                    100
                                            )}
                                            % OFF
                                        </span>
                                    )}
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    disabled={!product.inStock}
                                    className={`w-full font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ${
                                        product.inStock
                                            ? "bg-[#367C7C] hover:bg-[#2A5F5F] text-white"
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                                >
                                    {product.inStock
                                        ? "ADD TO CART"
                                        : "Out of Stock"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {sortedProducts.length > 0 && (
                    <div className="mt-8 flex justify-center">
                        <nav className="flex items-center space-x-2">
                            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                                Previous
                            </button>
                            <button className="px-3 py-2 text-sm font-medium text-white bg-[#367C7C] border border-[#367C7C] rounded-lg">
                                1
                            </button>
                            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                                2
                            </button>
                            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                                3
                            </button>
                            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                                Next
                            </button>
                        </nav>
                    </div>
                )}

                {/* No Results */}
                {sortedProducts.length === 0 && (
                    <div className="text-center py-12">
                        <svg
                            className="w-16 h-16 text-gray-400 mx-auto mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                            />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No products found
                        </h3>
                        <p className="text-gray-600">
                            Try adjusting your filters or search criteria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
