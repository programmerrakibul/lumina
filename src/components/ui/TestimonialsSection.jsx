"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Shield,
  Award,
  TrendingUp,
  ThumbsUp,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Product Designer",
    company: "TechCorp Inc.",
    rating: 5,
    content:
      "The quality of products exceeded my expectations. Delivery was fast and the customer service was exceptional. I've been a loyal customer for over a year now!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    date: "2 days ago",
    verified: true,
    tags: ["Fast Delivery", "Great Quality"],
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Manager",
    company: "Creative Studio",
    rating: 4,
    content:
      "Love the variety and quality of products. The website is easy to navigate and checkout is seamless. Highly recommended for anyone looking for premium products.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    date: "1 week ago",
    verified: true,
    tags: ["Easy Checkout", "Premium Products"],
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Software Engineer",
    company: "Innovate Labs",
    rating: 5,
    content:
      "As someone who values quality and reliability, I can confidently say this is the best e-commerce platform I've used. The attention to detail is remarkable.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    date: "3 weeks ago",
    verified: true,
    tags: ["Reliable", "Quality Focus"],
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Business Owner",
    company: "Style Boutique",
    rating: 5,
    content:
      "The customer support team went above and beyond to help me with my order. Products arrived perfectly packaged and exactly as described. Will shop again!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    date: "1 month ago",
    verified: true,
    tags: ["Great Support", "Perfect Packaging"],
  },
  {
    id: 5,
    name: "David Kim",
    role: "Content Creator",
    company: "Digital Media",
    rating: 4,
    content:
      "Great selection of products with competitive pricing. The user experience is smooth and the mobile app works flawlessly. Keep up the good work!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    date: "2 months ago",
    verified: true,
    tags: ["Competitive Pricing", "Smooth UX"],
  },
];

const ratingStats = [
  { stars: 5, percentage: 85, count: 1280 },
  { stars: 4, percentage: 12, count: 180 },
  { stars: 3, percentage: 2, count: 30 },
  { stars: 2, percentage: 0.5, count: 8 },
  { stars: 1, percentage: 0.5, count: 8 },
];

const popularTags = [
  "Fast Delivery",
  "Great Quality",
  "Easy Returns",
  "Excellent Support",
  "Fair Prices",
  "Wide Selection",
  "Secure Payments",
  "User Friendly",
];

const trustBadges = [
  { icon: "🔒", title: "Secure Payments", description: "256-bit encryption" },
  { icon: "🔐", title: "SSL Encrypted", description: "Bank-level security" },
  { icon: "💸", title: "Money Back", description: "30-day guarantee" },
  { icon: "🚚", title: "Free Shipping", description: "On orders $50+" },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const handleAutoPlay = useCallback(() => {
    if (isAutoPlaying) {
      nextTestimonial();
    }
  }, [isAutoPlaying, nextTestimonial]);

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

  useEffect(() => {
    intervalRef.current = setInterval(handleAutoPlay, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, handleAutoPlay]);

  const currentTestimonial = testimonials[currentIndex];

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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full border border-gray-200 mb-4 sm:mb-6">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-sm sm:text-base font-semibold">
              Customer Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block">Loved by</span>
            <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Customers
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from some of our
            satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column - Testimonial Carousel */}
          <div
            className="relative h-fit space-y-10"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100 z-0">
                <Quote className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              </div>

              {/* Rating & Date */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < currentTestimonial.rating
                          ? "text-amber-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {currentTestimonial.date}
                </span>
              </div>

              {/* Content */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                {`"${currentTestimonial.content}"`}
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-lg">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 56px, 64px"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {currentTestimonial.name}
                    </h4>
                    {currentTestimonial.verified && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {currentTestimonial.role} · {currentTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {currentTestimonial.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-blue-600 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Autoplay Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-5000 ease-linear"
                style={{
                  width: isAutoPlaying ? "100%" : "0%",
                  transition: isAutoPlaying ? "width 5s linear" : "none",
                }}
              />
            </div>
          </div>

          {/* Right Column - Rating Stats */}
          <div className="space-y-8">
            {/* Overall Rating Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Overall Rating
              </h3>

              {/* Average Rating */}
              <div className="flex items-center mb-8">
                <div className="text-5xl sm:text-6xl font-bold text-gray-900 mr-4">
                  4.8
                </div>
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Based on 1,506 reviews
                  </p>
                </div>
              </div>

              {/* Rating Bars */}
              <div className="space-y-4 mb-8">
                {ratingStats.map((stat, index) => (
                  <div key={stat.stars} className="flex items-center">
                    <div className="flex items-center w-16 sm:w-20">
                      <span className="text-sm text-gray-600 mr-2">
                        {stat.stars} star{stat.stars > 1 ? "s" : ""}
                      </span>
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                    </div>

                    <div className="flex-1 mx-3 sm:mx-4">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${stat.percentage}%` : "0%",
                            transition: `width 1s ease ${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>

                    <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                      {stat.percentage}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Review Counts */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span>+15% reviews this month</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4 text-blue-600" />
                  <span>92% would recommend</span>
                </div>
              </div>
            </div>

            {/* What Customers Love */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                What customers love most
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-2 bg-linear-to-r from-blue-50 to-purple-50 text-gray-800 text-sm font-medium rounded-lg border border-blue-100"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(10px)",
                      transition: `opacity 0.5s ease ${index * 50}ms, transform 0.5s ease ${index * 50}ms`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.title}
                  className="bg-white rounded-xl p-4 sm:p-5 text-center shadow-lg border border-gray-100"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(10px)",
                    transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
                  }}
                >
                  <div className="text-2xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    {badge.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    {badge.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
              }}
            >
              <div className="flex items-start mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-amber-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {`"${testimonial.content}"`}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{testimonial.date}</span>
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3 text-blue-600" />
                  <span>Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready to experience it yourself?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                Join thousands of satisfied customers today
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                Shop Now
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Backed by industry standards
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                text: "Secure Shopping",
                color: "text-green-600",
              },
              { icon: Award, text: "Award Winning", color: "text-amber-600" },
              {
                icon: TrendingUp,
                text: "Trusted Brand",
                color: "text-blue-600",
              },
              {
                icon: CheckCircle,
                text: "Verified Reviews",
                color: "text-purple-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow border border-gray-200"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
                }}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-sm font-medium text-gray-900">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
