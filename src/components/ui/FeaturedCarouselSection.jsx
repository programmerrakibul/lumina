"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingBag,
  Tag,
  Clock,
  Truck,
} from "lucide-react";
import Container from "./Container";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium sound quality with 40-hour battery life and active noise cancellation",
    price: 349.99,
    originalPrice: 429.99,
    discount: 20,
    rating: 4.8,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=800&fit=crop",
    badge: "Best Seller",
    features: [
      "40-hour battery",
      "Active noise cancellation",
      "Bluetooth 5.3",
      "Touch controls",
    ],
    shipping: "Free 2-day shipping",
    timeLeft: "2 days left",
  },
  {
    id: 2,
    name: "Ultra-Thin Laptop Pro",
    description:
      "Lightweight design with incredible performance for professionals",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 15,
    rating: 4.9,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=800&fit=crop",
    badge: "New Arrival",
    features: ["Intel i7 processor", "16GB RAM", "512GB SSD", "4K Display"],
    shipping: "Free overnight shipping",
    timeLeft: "1 day left",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    description:
      "Track your health with advanced sensors and AI-powered insights",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.7,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1579586337278-3fdcab7460e8?w=1200&h=800&fit=crop",
    badge: "Trending",
    features: [
      "Heart rate monitor",
      "GPS tracking",
      "7-day battery",
      "Water resistant",
    ],
    shipping: "Free shipping",
    timeLeft: "3 days left",
  },
  {
    id: 4,
    name: "Professional Camera Kit",
    description:
      "Capture stunning photos with our complete professional photography kit",
    price: 2499.99,
    originalPrice: 2999.99,
    discount: 17,
    rating: 4.9,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop",
    badge: "Limited Edition",
    features: ["24MP sensor", "4K video", "3 lenses kit", "Professional bag"],
    shipping: "Free insured shipping",
    timeLeft: "Sold out soon",
  },
  {
    id: 5,
    name: "Gaming Console Pro",
    description: "Next-gen gaming experience with 4K support and ray tracing",
    price: 499.99,
    originalPrice: 599.99,
    discount: 17,
    rating: 4.8,
    reviews: 421,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200&h=800&fit=crop",
    badge: "Popular",
    features: ["4K gaming", "1TB SSD", "Ray tracing", "Backward compatible"],
    shipping: "Free express shipping",
    timeLeft: "24 hours left",
  },
];

const FeaturedCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  const currentProduct = featuredProducts[currentIndex];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <Container className="relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg shadow-blue-500/25 mb-4 sm:mb-6">
            <Tag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-semibold">
              Featured Collection
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block">Premium Products</span>
            <span className="block text-blue-600">With Exclusive Deals</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium products with
            limited-time discounts
          </p>
        </div>

        {/* Main Carousel */}
        <div
          ref={carouselRef}
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Carousel Container */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={currentIndex === 0}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent lg:bg-linear-to-r lg:from-black/40 lg:via-black/20 lg:to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2">
                  <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-gray-900 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    {currentProduct.badge}
                  </span>
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 bg-linear-to-r from-red-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    <span className="text-base sm:text-lg font-bold">
                      {currentProduct.discount}%
                    </span>
                    <span>OFF</span>
                  </div>
                </div>

                {/* Timer */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">
                      {currentProduct.timeLeft}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${
                              i < Math.floor(currentProduct.rating)
                                ? "text-amber-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm sm:text-base font-medium text-gray-700">
                        {currentProduct.rating} ({currentProduct.reviews}{" "}
                        reviews)
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {currentProduct.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                      {currentProduct.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentProduct.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                          ${currentProduct.price}
                        </span>
                        <span className="text-xl sm:text-2xl text-gray-400 line-through">
                          ${currentProduct.originalPrice}
                        </span>
                        <span className="px-3 py-1 bg-linear-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full">
                          Save $
                          {(
                            currentProduct.originalPrice - currentProduct.price
                          ).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Truck className="w-4 h-4" />
                        <span>{currentProduct.shipping}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="group flex-1 flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300">
                      <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-base sm:text-lg">Add to Cart</span>
                      <span className="text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ${currentProduct.price}
                      </span>
                    </button>
                    <button className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Mobile Navigation Dots */}
          <div className="flex sm:hidden justify-center gap-2 mt-6">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Desktop Navigation Dots */}
          <div className="hidden sm:flex justify-center gap-3 mt-8">
            {featuredProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => goToSlide(index)}
                className={`flex flex-col items-center gap-2 transition-all ${
                  index === currentIndex
                    ? "opacity-100 scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-transparent">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 border-2 border-blue-600 rounded-lg"></div>
                  )}
                </div>
                <span className="text-xs font-medium text-gray-900 truncate max-w-20">
                  ${product.price}
                </span>
              </button>
            ))}
          </div>

          {/* Autoplay Progress Bar */}
          <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-3xl overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-linear"
              style={{
                width: autoplay ? "100%" : "0%",
                transition: autoplay ? "width 5s linear" : "none",
              }}
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: Truck,
              title: "Free Shipping",
              description: "On all orders over $50",
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description: "Dedicated customer service",
            },
            {
              icon: Tag,
              title: "Best Price",
              description: "Price match guarantee",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="sm:hidden flex justify-center items-center gap-2 mt-8 text-sm text-gray-500">
          <span>Swipe to navigate</span>
          <div className="flex gap-1">
            <ChevronLeft className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCarouselSection;
