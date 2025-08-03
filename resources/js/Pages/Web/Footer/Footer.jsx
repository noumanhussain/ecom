import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Information */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[#367C7C] mb-4">
                                CONATURAL
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Your trusted source for natural beauty and
                                skincare products. We believe in the power of
                                nature to enhance your beauty and well-being.
                            </p>
                        </div>

                        {/* Social Media Links */}
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-4">
                                Follow Us
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com/conatural"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#367C7C] hover:bg-[#2A5F5F] text-white p-3 rounded-full transition-colors duration-300"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com/conatural"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#367C7C] hover:bg-[#2A5F5F] text-white p-3 rounded-full transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com/conatural"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#367C7C] hover:bg-[#2A5F5F] text-white p-3 rounded-full transition-colors duration-300"
                                    aria-label="Twitter"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://youtube.com/conatural"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#367C7C] hover:bg-[#2A5F5F] text-white p-3 rounded-full transition-colors duration-300"
                                    aria-label="YouTube"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/new-arrivals"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/best-sellers"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Best Sellers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/clearance"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Clearance Sale
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gift-cards"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Gift Cards
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">
                            Customer Service
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shipping"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Shipping Info
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/returns"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/size-guide"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Size Guide
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/track-order"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Track Order
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">
                            Stay Updated
                        </h4>
                        <p className="text-gray-300 mb-4">
                            Subscribe to our newsletter for exclusive offers,
                            beauty tips, and new product updates.
                        </p>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#367C7C] transition-colors duration-300"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#367C7C] hover:bg-[#2A5F5F] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="mt-8 space-y-3">
                            <div className="flex items-center text-gray-300">
                                <svg
                                    className="w-5 h-5 mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <svg
                                    className="w-5 h-5 mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>support@conatural.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {currentYear} CONATURAL. All rights reserved.
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center space-x-6 text-sm">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/cookie-policy"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Cookie Policy
                            </Link>
                            <Link
                                href="/sitemap"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Sitemap
                            </Link>
                        </div>

                        {/* Payment Methods */}
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-400 text-sm mr-2">
                                We Accept:
                            </span>
                            <div className="flex space-x-2">
                                <svg
                                    className="w-8 h-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4H0C0 2.9 1.8 2 4 2h16c2.2 0 4 .9 4 2v16c0 1.1-1.8 2-4 2H4c-2.2 0-4-.9-4-2V4z" />
                                </svg>
                                <svg
                                    className="w-8 h-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4H0C0 2.9 1.8 2 4 2h16c2.2 0 4 .9 4 2v16c0 1.1-1.8 2-4 2H4c-2.2 0-4-.9-4-2V4z" />
                                </svg>
                                <svg
                                    className="w-8 h-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4H0C0 2.9 1.8 2 4 2h16c2.2 0 4 .9 4 2v16c0 1.1-1.8 2-4 2H4c-2.2 0-4-.9-4-2V4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
