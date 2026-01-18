"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, TrendingUp } from "lucide-react";

const ProductCard = ({ product = {} }) => {
  const { _id, name, imageURL, description, category, stock, rating, price } =
    product;

  const isTrending = rating >= 4.5;

  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Trending Badge */}
      {isTrending && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-linear-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
            <TrendingUp className="w-3 h-3" />
            <span>Trending</span>
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={imageURL}
          alt={name}
          fill
          className="object-cover aspect-3/2 h-20 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button
            className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </button>
          <Link href={`/products/${_id}`}>
            <button
              className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-110"
              aria-label="View details"
            >
              <Eye className="w-5 h-5 text-gray-700" />
            </button>
          </Link>
        </div>

        {/* Stock Status */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
          {stock > 0 ? (
            <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-gray-900">
                  {stock} in stock
                </span>
              </div>
            </div>
          ) : (
            <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-xs font-semibold text-gray-900">
                  Out of stock
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 md:p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 capitalize">
            {category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2 min-h-10">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
              ${(price || 0).toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button (Mobile) */}
          <button className="lg:hidden p-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* View Details Button */}
        <Link href={`/products/${_id}`} className="block mt-4">
          <button className="w-full py-3 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
