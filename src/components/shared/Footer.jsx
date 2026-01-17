"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  categories: [
    { name: "Electronics", href: "/categories/electronics" },
    { name: "Fashion", href: "/categories/fashion" },
    { name: "Home & Living", href: "/categories/home" },
    { name: "Books & Media", href: "/categories/books" },
    { name: "Sports & Outdoors", href: "/categories/sports" },
    { name: "Beauty & Health", href: "/categories/beauty" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "FAQ", href: "/faq" },
    { name: "Order Status", href: "/orders" },
  ],
};

const paymentMethods = [
  { name: "Visa", icon: "VISA" },
  { name: "Mastercard", icon: "MC" },
  { name: "PayPal", icon: "PP" },
  { name: "Apple Pay", icon: "AP" },
  { name: "Google Pay", icon: "GP" },
  { name: "Amazon Pay", icon: "AMZ" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <ShoppingBag className="h-10 w-10 text-primary-400 mr-3" />
              <div>
                <h2 className="text-3xl font-bold text-white">LUMINA</h2>
                <p className="text-gray-400 text-sm">
                  Premium E-commerce Experience
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-8 max-w-md">
              Your one-stop destination for premium products, exceptional
              service, and a shopping experience that goes beyond expectations.
            </p>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 dark:bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold text-lg mb-6 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-12 border-t border-gray-800 dark:border-dark-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary-400 mr-4 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Customer Support
                </h4>
                <p className="text-gray-400">1-800-NEX-SHOP</p>
                <p className="text-sm text-gray-500">24/7 Support Available</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary-400 mr-4 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-2">Email Us</h4>
                <p className="text-gray-400">support@nexshop.com</p>
                <p className="text-sm text-gray-500">
                  Response within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary-400 mr-4 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Visit Our Store
                </h4>
                <p className="text-gray-400">
                  123 Commerce St, San Francisco, CA
                </p>
                <p className="text-sm text-gray-500">Mon-Sat: 10AM-8PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-950 dark:bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NexShop. All rights reserved.
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">We accept:</span>
              <div className="flex items-center space-x-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="px-3 py-1 bg-gray-800 dark:bg-dark-800 rounded text-xs font-medium text-gray-400"
                  >
                    {method.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Country Selector & Legal */}
            <div className="flex items-center space-x-8">
              {/* Legal Links */}
              <div className="flex items-center space-x-6">
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-primary-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Back to top"
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
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
