import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Products({ products, categories }) {
    const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
    const [sortBy, setSortBy] = useState("featured");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [priceRange, setPriceRange] = useState([0, 2000]);

    const sortOptions = [
        { value: "featured", label: "Featured" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "name-asc", label: "Name: A to Z" },
        { value: "name-desc", label: "Name: Z to A" },
        { value: "newest", label: "Newest First" },
        { value: "rating", label: "Highest Rated" },
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
            selectedCategory === "all" ||
            product.category_id === selectedCategory;
        const priceMatch =
            (product.sale_price || product.price) >= priceRange[0] &&
            (product.sale_price || product.price) <= priceRange[1];
        return categoryMatch && priceMatch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return (a.sale_price || a.price) - (b.sale_price || b.price);
            case "price-high":
                return (b.sale_price || b.price) - (a.sale_price || a.price);
            case "name-asc":
                return a.name.localeCompare(b.name);
            case "name-desc":
                return b.name.localeCompare(a.name);
            case "newest":
                return b.id - a.id;
            case "rating":
                return (b.rating || 0) - (a.rating || 0);
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
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2 rounded-lg transition-colors duration-300 ${
                                    viewMode === "list"
                                        ? "bg-[#367C7C] text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Filters */}
                        <div className="flex items-center space-x-4">
                            {/* Category Filter */}
                            <select
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-transparent"
                            >
                                <option value="all">All Categories</option>
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            {/* Sort Options */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#367C7C] focus:border-transparent"
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

                {/* Products Grid/List */}
                <div
                    className={`grid gap-6 ${
                        viewMode === "grid"
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            : "grid-cols-1"
                    }`}
                >
                    {sortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className={`bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300 ${
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
                                    src={
                                        product.featured_image ||
                                        product.images?.[0] ||
                                        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center"
                                    }
                                    alt={product.name}
                                    className={`w-full h-48 object-cover ${
                                        viewMode === "list" ? "h-full" : ""
                                    }`}
                                />

                                {/* Multiple Badges Container */}
                                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                                    {product.is_featured && (
                                        <span className="bg-[#367C7C] text-white text-xs font-semibold px-2 py-1 rounded">
                                            FEATURED
                                        </span>
                                    )}
                                    {product.is_on_sale && (
                                        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                            SALE
                                        </span>
                                    )}
                                    {product.is_active === false && (
                                        <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                            INACTIVE
                                        </span>
                                    )}
                                </div>

                                {/* Out of Stock Overlay */}
                                {product.stock_quantity <= 0 && (
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
                                    {product.category?.name || "Uncategorized"}
                                </p>

                                {/* Brand */}
                                <p className="text-sm font-medium text-[#367C7C] mb-2">
                                    CONATURAL
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
                                        {product.short_description ||
                                            product.description}
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
                                                    Math.floor(
                                                        product.rating || 0
                                                    )
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
                                        {product.rating || 0} (
                                        {product.reviews || 0})
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl font-bold text-gray-900">
                                            Rs.
                                            {product.sale_price ||
                                                product.price}
                                        </span>
                                        {product.sale_price &&
                                            product.sale_price <
                                                product.price && (
                                                <span className="text-sm text-gray-500 line-through">
                                                    Rs.{product.price}
                                                </span>
                                            )}
                                    </div>

                                    {/* Discount Percentage */}
                                    {product.sale_price &&
                                        product.sale_price < product.price && (
                                            <span className="text-sm font-semibold text-red-500">
                                                {Math.round(
                                                    ((product.price -
                                                        product.sale_price) /
                                                        product.price) *
                                                        100
                                                )}
                                                % OFF
                                            </span>
                                        )}
                                </div>

                                {/* Stock Status */}
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`text-sm ${
                                            product.stock_quantity > 0
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {product.stock_quantity > 0
                                            ? `${product.stock_quantity} in stock`
                                            : "Out of stock"}
                                    </span>

                                    {/* Add to Cart Button */}
                                    <button
                                        disabled={product.stock_quantity <= 0}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            product.stock_quantity > 0
                                                ? "bg-[#367C7C] text-white hover:bg-[#2a5f5f]"
                                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        }`}
                                    >
                                        {product.stock_quantity > 0
                                            ? "Add to Cart"
                                            : "Out of Stock"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {sortedProducts.length === 0 && (
                    <div className="text-center py-12">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                            No products found
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Try adjusting your filters or search criteria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
