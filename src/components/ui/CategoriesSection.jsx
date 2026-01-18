"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Smartphone,
  Shirt,
  Book,
  Home,
  Dumbbell,
  Heart,
  ChevronRight,
  TrendingUp,
  Shield,
  Truck,
  Clock,
} from "lucide-react";
import Container from "./Container";

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Latest gadgets & smart devices",
    count: "245+ Items",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=600&fit=crop",
    icon: Smartphone,
    color: "bg-blue-100",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    gradient: "from-blue-400 to-blue-600",
    trending: true,
  },
  {
    id: 2,
    name: "Fashion",
    description: "Trendy clothes & accessories",
    count: "189+ Items",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    icon: Shirt,
    color: "bg-pink-100",
    textColor: "text-pink-600",
    borderColor: "border-pink-200",
    gradient: "from-pink-400 to-rose-500",
    trending: true,
  },
  {
    id: 3,
    name: "Books & Media",
    description: "Educational & entertaining reads",
    count: "156+ Items",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop",
    icon: Book,
    color: "bg-amber-100",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    gradient: "from-amber-400 to-orange-500",
    trending: false,
  },
  {
    id: 4,
    name: "Home & Living",
    description: "Furniture & decor items",
    count: "312+ Items",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    icon: Home,
    color: "bg-emerald-100",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    gradient: "from-emerald-400 to-teal-500",
    trending: true,
  },
  {
    id: 5,
    name: "Sports & Fitness",
    description: "Equipment & accessories",
    count: "134+ Items",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    icon: Dumbbell,
    color: "bg-purple-100",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    gradient: "from-purple-400 to-violet-500",
    trending: false,
  },
  {
    id: 6,
    name: "Beauty & Health",
    description: "Skincare & wellness products",
    count: "278+ Items",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
    icon: Heart,
    color: "bg-red-100",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    gradient: "from-red-400 to-pink-500",
    trending: true,
  },
];

const stats = [
  {
    icon: Shield,
    value: "100%",
    label: "Authentic Products",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Truck,
    value: "Free",
    label: "Shipping Over $50",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Customer Support",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: TrendingUp,
    value: "10K+",
    label: "Happy Customers",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <Container className="relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full border border-gray-200 mb-4 sm:mb-6">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-sm sm:text-base font-semibold">
              Trending Categories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block">Shop By</span>
            <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collections across different categories. Find
            exactly what you need with our wide selection.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;
            const animationDelay = index * 100;

            return (
              <div
                key={category.id}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 ${category.borderColor} bg-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  isActive ? "ring-2 ring-blue-500 shadow-xl" : ""
                }`}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${animationDelay}ms, transform 0.5s ease ${animationDelay}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
                }}
              >
                {/* Category Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  {category.trending && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full">
                        <TrendingUp className="w-3 h-3 text-green-600" />
                        <span className="text-xs font-semibold text-gray-900">
                          Trending
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`absolute top-4 right-4 ${category.color} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <category.icon
                      className={`w-6 h-6 sm:w-7 sm:h-7 ${category.textColor}`}
                    />
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-semibold ${category.textColor}`}
                    >
                      {category.count}
                    </span>

                    <button className="group flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-50 to-purple-50 text-gray-800 font-semibold rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                      <span className="text-sm sm:text-base">Shop Now</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-200 shadow-lg">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Shop With Us?
            </h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We&apos;re committed to providing the best shopping experience for
              our customers
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-lg border border-gray-100"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
                }}
              >
                <div
                  className={`${stat.bg} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon
                    className={`w-7 h-7 sm:w-8 sm:h-8 ${stat.color}`}
                  />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { text: "Secure payment processing" },
              { text: "Easy returns within 30 days" },
              { text: "Price match guarantee" },
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm sm:text-base">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl shadow-xl">
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                Browse our complete catalog or contact our support team
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                Browse All Categories
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
