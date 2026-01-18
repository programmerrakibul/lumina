"use client";

import { useState, useEffect } from "react";
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
  ChevronUp,
  Shield,
  Truck,
  CreditCard,
  Globe,
  Download,
  Award,
  CheckCircle,
} from "lucide-react";
import Container from "../ui/Container";

const footerLinks = {
  categories: [
    { name: "Electronics", href: "" },
    { name: "Fashion", href: "" },
    { name: "Home & Living", href: "" },
    { name: "Books & Media", href: "" },
    { name: "Sports & Outdoors", href: "" },
    { name: "Beauty & Health", href: "" },
  ],
  company: [
    { name: "About Us", href: "" },
    { name: "Our Story", href: "" },
    { name: "Careers", href: "" },
    { name: "Press", href: "" },
    { name: "Sustainability", href: "" },
    { name: "Contact", href: "" },
  ],
  support: [
    { name: "Help Center", href: "" },
    { name: "Shipping Info", href: "" },
    { name: "Returns & Exchanges", href: "" },
    { name: "Size Guide", href: "" },
    { name: "FAQ", href: "" },
    { name: "Order Status", href: "" },
  ],
};

const paymentMethods = [
  { name: "Visa", icon: "VISA", color: "text-blue-700" },
  { name: "Mastercard", icon: "MC", color: "text-red-600" },
  { name: "PayPal", icon: "PP", color: "text-blue-500" },
  { name: "Apple Pay", icon: "AP", color: "text-black" },
  { name: "Google Pay", icon: "GP", color: "text-blue-600" },
  { name: "Amazon Pay", icon: "AMZ", color: "text-amber-600" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, color: "bg-blue-600 hover:bg-blue-700" },
  { name: "Twitter", icon: Twitter, color: "bg-sky-500 hover:bg-sky-600" },
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90",
  },
  { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700 hover:bg-blue-800" },
  { name: "YouTube", icon: Youtube, color: "bg-red-600 hover:bg-red-700" },
];

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-linear-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Main Footer Content */}
      <Container className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LUMINA
                </h2>
                <p className="text-gray-600 text-sm">
                  Premium Shopping Experience
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-8 max-w-md">
              Your trusted destination for premium products, exceptional
              service, and a shopping experience that exceeds expectations.
            </p>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-semibold mb-4">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`w-10 h-10 rounded-lg ${social.color} flex items-center justify-center text-white transition-colors`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center gap-2">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-3 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-2">
                  Customer Support
                </h4>
                <p className="text-gray-900 font-bold text-lg">1-800-LUMINA</p>
                <p className="text-gray-600 text-sm">24/7 Support Available</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-2">Email Us</h4>
                <p className="text-gray-900 font-bold text-lg">
                  support@lumina.com
                </p>
                <p className="text-gray-600 text-sm">
                  Response within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-2">
                  Visit Our Store
                </h4>
                <p className="text-gray-900 font-bold text-lg">
                  123 Commerce St, San Francisco, CA
                </p>
                <p className="text-gray-600 text-sm">Mon-Sat: 10AM-8PM</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Section */}
      <div className="bg-linear-to-r from-blue-50 to-purple-50 border-t border-gray-200 py-8">
        <Container className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <div className="text-gray-900 font-semibold mb-1">
                © {currentYear} LUMINA. All rights reserved.
              </div>
              <p className="text-gray-600 text-sm">
                Premium E-commerce Platform
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Security Badges */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: Shield, text: "SSL Secured", color: "text-green-600" },
                { icon: CheckCircle, text: "Verified", color: "text-blue-600" },
                { icon: Globe, text: "Worldwide", color: "text-purple-600" },
                {
                  icon: Download,
                  text: "Fast Delivery",
                  color: "text-amber-600",
                },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span className="text-gray-600 text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-50 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
