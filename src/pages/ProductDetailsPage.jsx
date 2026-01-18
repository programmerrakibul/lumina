"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Heart,
  ChevronLeft,
  ChevronRight,
  Package,
  Clock,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { toast } from "sonner";

const ProductDetailsPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const images = [product.imageURL, ...(product.additionalImages || [])];
  const isLowStock = product.stock > 0 && product.stock < 10;
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => Math.min(prev + 1, product.stock));
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleAddToCart = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Added ${quantity} ${product.name}(s) to cart!`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-gray-200 shadow-lg">
              <Image
                src={images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Discount Badge */}
              {discount > 0 && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-4 py-2 bg-linear-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl shadow-lg">
                    -{discount}% OFF
                  </div>
                </div>
              )}

              {/* Trending Badge */}
              {product.rating >= 4.5 && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Trending</span>
                  </div>
                </div>
              )}

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev - 1 + images.length) % images.length,
                      )
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) => (prev + 1) % images.length)
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                    <span className="text-sm font-medium text-gray-700">
                      {currentImageIndex + 1} / {images.length}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 sm:gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-blue-500 shadow-lg scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 25vw, 20vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Product Header */}
            <div>
              {/* Category */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-medium rounded-xl border border-blue-100 capitalize">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating & Stock */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-gray-900">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-gray-500">
                      ({product.reviews || 0} reviews)
                    </span>
                  </div>
                </div>

                {/* Stock Status */}
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    product.stock > 0
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      product.stock > 0
                        ? "bg-green-500 animate-pulse"
                        : "bg-red-500"
                    }`}
                  ></div>
                  <span className="text-sm font-medium">
                    {product.stock > 0
                      ? isLowStock
                        ? `Only ${product.stock} left!`
                        : `${product.stock} in stock`
                      : "Out of stock"}
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="px-3 py-1 bg-linear-to-r from-green-500 to-emerald-600 text-white text-sm font-bold rounded-full">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">
                  Free shipping on orders over $50
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={quantity <= 1}
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <span className="text-xl">-</span>
                  </button>
                  <span className="w-12 sm:w-16 h-12 sm:h-14 flex items-center justify-center text-lg sm:text-xl font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    disabled={quantity >= product.stock}
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <span className="text-xl">+</span>
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0 || isLoading}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 sm:py-5 rounded-xl font-semibold shadow-lg transition-all ${
                    product.stock === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : isLoading
                        ? "bg-linear-to-r from-blue-500 to-purple-500 opacity-70 cursor-not-allowed"
                        : "bg-linear-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white hover:shadow-xl"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Adding to Cart...</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                      <span className="text-sm opacity-90">
                        • ${(product.price * quantity).toFixed(2)}
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-4">
                <button className="py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-xl hover:border-blue-300 hover:bg-gray-50 transition-all duration-300">
                  Buy Now
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`py-4 border-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isWishlisted
                      ? "bg-linear-to-r from-red-50 to-pink-50 border-red-200 text-red-600"
                      : "bg-white border-gray-200 text-gray-900 hover:border-pink-300"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? "fill-current text-red-500" : ""}`}
                  />
                  {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center p-4 bg-linear-to-b from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-linear-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Free Shipping
                </p>
                <p className="text-xs text-gray-600">On orders $50+</p>
              </div>
              <div className="text-center p-4 bg-linear-to-b from-green-50 to-white rounded-xl border border-green-100">
                <div className="w-12 h-12 bg-linear-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  2-Year Warranty
                </p>
                <p className="text-xs text-gray-600">Full coverage</p>
              </div>
              <div className="text-center p-4 bg-linear-to-b from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-linear-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <RotateCcw className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  30-Day Returns
                </p>
                <p className="text-xs text-gray-600">Easy returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications &&
          Object.keys(product.specifications).length > 0 && (
            <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-600 font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </span>
                    <span className="text-gray-900 font-semibold text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
