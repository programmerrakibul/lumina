"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import Container from "./Container";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Product Designer",
    company: "TechCorp Inc.",
    rating: 5,
    content:
      "The quality of products exceeded my expectations. Delivery was fast and the customer service was exceptional. I've been a loyal customer for over a year now!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    date: "2 days ago",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Manager",
    company: "Creative Studio",
    rating: 4,
    content:
      "Love the variety and quality of products. The website is easy to navigate and checkout is seamless. Highly recommended for anyone looking for premium products.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
    date: "1 week ago",
    verified: true,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Software Engineer",
    company: "Innovate Labs",
    rating: 5,
    content:
      "As someone who values quality and reliability, I can confidently say this is the best e-commerce platform I've used. The attention to detail is remarkable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    date: "3 weeks ago",
    verified: true,
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Business Owner",
    company: "Style Boutique",
    rating: 5,
    content:
      "The customer support team went above and beyond to help me with my order. Products arrived perfectly packaged and exactly as described. Will shop again!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    date: "1 month ago",
    verified: true,
  },
  {
    id: 5,
    name: "David Kim",
    role: "Content Creator",
    company: "Digital Media",
    rating: 4,
    content:
      "Great selection of products with competitive pricing. The user experience is smooth and the mobile app works flawlessly. Keep up the good work!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    date: "2 months ago",
    verified: true,
  },
];

const ratingStats = [
  { stars: 5, percentage: 85, count: 1280 },
  { stars: 4, percentage: 12, count: 180 },
  { stars: 3, percentage: 2, count: 30 },
  { stars: 2, percentage: 0.5, count: 8 },
  { stars: 1, percentage: 0.5, count: 8 },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 mb-4">
              <Quote className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Customer Stories</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Customers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from some of our
              satisfied customers
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Testimonial Carousel */}
          <div className="relative">
            <div className="relative bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-500/10">
                <Quote className="h-24 w-24" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < currentTestimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      {currentTestimonial.date}
                    </span>
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    {currentTestimonial.content}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                      <Image
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {currentTestimonial.name}
                        </h4>
                        {currentTestimonial.verified && (
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {currentTestimonial.role} · {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary-600 w-8"
                          : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-linear-to-r from-primary-500 to-purple-500 rounded-2xl -z-10 opacity-20" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl -z-10 opacity-20" />
          </div>

          {/* Right Column - Rating Stats */}
          <div>
            <div className="bg-linear-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 rounded-3xl p-8 md:p-12 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Overall Rating
              </h3>

              {/* Average Rating */}
              <div className="flex items-center mb-8">
                <div className="text-5xl font-bold text-gray-900 dark:text-white mr-4">
                  4.8
                </div>
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Based on 1,506 reviews
                  </p>
                </div>
              </div>

              {/* Rating Bars */}
              <div className="space-y-4 mb-8">
                {ratingStats.map((stat) => (
                  <div key={stat.stars} className="flex items-center">
                    <div className="flex items-center w-20">
                      <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
                        {stat.stars} star{stat.stars > 1 ? "s" : ""}
                      </span>
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>

                    <div className="flex-1 mx-4">
                      <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-linear-to-r from-yellow-400 to-orange-500 rounded-full"
                        />
                      </div>
                    </div>

                    <span className="text-sm font-medium text-gray-900 dark:text-white w-12">
                      {stat.percentage}%
                    </span>
                  </div>
                ))}
              </div>

              {/* What Customers Say */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  What customers love most
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Fast Delivery",
                    "Great Quality",
                    "Easy Returns",
                    "Excellent Support",
                    "Fair Prices",
                    "Wide Selection",
                  ].map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Trusted by leading companies
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Secure Payments", icon: "🔒" },
                    { name: "SSL Encrypted", icon: "🔐" },
                    { name: "Money Back", icon: "💸" },
                  ].map((badge) => (
                    <div key={badge.name} className="text-center">
                      <div className="text-2xl mb-2">{badge.icon}</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {badge.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
