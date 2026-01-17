"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    description: "Premium sound quality with 40-hour battery life",
    price: 349.99,
    originalPrice: 429.99,
    discount: 20,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Ultra-Thin Laptop Pro",
    description: "Lightweight design with incredible performance",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 15,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    description: "Track your health with advanced sensors",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1579586337278-3fdcab7460e8",
    badge: "Trending",
  },
  {
    id: 4,
    name: "Professional Camera Kit",
    description: "Capture stunning photos with our pro kit",
    price: 2499.99,
    originalPrice: 2999.99,
    discount: 17,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    badge: "Limited Edition",
  },
  {
    id: 5,
    name: "Gaming Console Pro",
    description: "Next-gen gaming experience with 4K support",
    price: 499.99,
    originalPrice: 599.99,
    discount: 17,
    rating: 4.8,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
    badge: "Popular",
  },
];

const FeaturedCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
      <Container>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products with
              exclusive discounts
            </p>
          </motion.div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Main Carousel */}
          <div className="relative h-125 md:h-150 rounded-3xl overflow-hidden">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />

                  {/* Product Info */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-2xl">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {/* Badge */}
                          <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
                            {product.badge}
                          </span>

                          {/* Discount Badge */}
                          <div className="inline-flex items-center bg-linear-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg ml-4">
                            <span className="text-2xl font-bold">
                              {product.discount}%
                            </span>
                            <span className="ml-2">OFF</span>
                          </div>

                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {product.name}
                          </h3>

                          <p className="text-xl text-gray-200 mb-6 max-w-lg">
                            {product.description}
                          </p>

                          {/* Price */}
                          <div className="flex items-center mb-6">
                            <span className="text-5xl font-bold text-white">
                              ${product.price}
                            </span>
                            <span className="ml-4 text-2xl text-gray-300 line-through">
                              ${product.originalPrice}
                            </span>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center mb-8">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-white">
                              {product.rating} ({product.reviews} reviews)
                            </span>
                          </div>

                          {/* CTA Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                              <ShoppingBag className="h-5 w-5 mr-2" />
                              Add to Cart
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
                              Learn More
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full bg-linear-to-r from-primary-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, repeat: Infinity }}
              key={currentIndex}
            />
          </div>
        </div>

        {/* Product Thumbnails */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {featuredProducts.map((product, index) => (
            <button
              key={product.id}
              onClick={() => goToSlide(index)}
              className={`relative aspect-video rounded-xl overflow-hidden transition-all ${
                index === currentIndex
                  ? "ring-4 ring-primary-500 scale-105"
                  : "opacity-70 hover:opacity-100 hover:scale-[1.02]"
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-xs font-semibold text-white truncate">
                  {product.name}
                </p>
                <p className="text-xs text-gray-200">${product.price}</p>
              </div>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCarouselSection;
