import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop&crop=center",
            title: "Natural Beauty Products",
            subtitle: "Discover our premium collection",
            description: "Shop now and get up to 50% off on selected items",
            buttonText: "Shop Now",
            buttonLink: "/products",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=500&fit=crop&crop=center",
            title: "Organic Skincare",
            subtitle: "Pure ingredients for your skin",
            description: "New arrivals with natural ingredients",
            buttonText: "Explore",
            buttonLink: "/new-arrivals",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&h=500&fit=crop&crop=center",
            title: "Hair Care Collection",
            subtitle: "Nourish your hair naturally",
            description: "Special offers on hair care products",
            buttonText: "View Collection",
            buttonLink: "/hair-body",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop&crop=center",
            title: "Premium Cosmetics",
            subtitle: "Luxury beauty essentials",
            description: "Discover our exclusive cosmetic line",
            buttonText: "Shop Cosmetics",
            buttonLink: "/cosmetics",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop&crop=center",
            title: "Baby Care Products",
            subtitle: "Gentle care for little ones",
            description: "Safe and natural baby care essentials",
            buttonText: "Baby Care",
            buttonLink: "/baby-care",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden bg-gray-200">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                        </div>

                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                            {/* Left Side - Content */}
                            <div className="flex-1 text-left">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-xl md:text-2xl mb-4 text-white drop-shadow-lg">
                                    {slide.subtitle}
                                </p>
                                <p className="text-lg mb-8 text-white drop-shadow-lg">
                                    {slide.description}
                                </p>
                                <Link
                                    href={slide.buttonLink}
                                    className="inline-block bg-[#367C7C] hover:bg-[#2A5F5F] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg"
                                >
                                    {slide.buttonText}
                                </Link>
                            </div>

                            {/* Right Side - Additional Content or Product Image */}
                            <div className="flex-1 flex justify-center items-center">
                                <div className="text-center text-white drop-shadow-lg">
                                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 max-w-sm">
                                        <h3 className="text-2xl font-semibold mb-2">
                                            Featured Product
                                        </h3>
                                        <p className="text-lg opacity-90">
                                            Discover our latest collection
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 z-20"
                aria-label="Previous slide"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 z-20"
                aria-label="Next slide"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "bg-[#367C7C] scale-125"
                                : "bg-white bg-opacity-60 hover:bg-opacity-100"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
