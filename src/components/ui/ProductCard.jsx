"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({ product = {} }) => {
  const {
    _id,
    name,
    image,
    description,
    category,
    stock,
    reviews,
    rating,
    price,
  } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <Image
          src={image || `https://picsum.photos/seed/${_id}/400/400`}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <ShoppingCart className="h-4 w-4" />
          </button>
          <Link href={`/products/${_id}`}>
            <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
              <Eye className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
              {category}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
              {name}
            </h3>
          </div>
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            ${price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {rating}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({reviews || 0} reviews)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {stock > 0 ? (
              <span className="text-sm text-green-600 dark:text-green-400">
                In Stock
              </span>
            ) : (
              <span className="text-sm text-red-600 dark:text-red-400">
                Out of Stock
              </span>
            )}
          </div>
        </div>

        <Link href={`/products/${_id}`}>
          <button className="w-full mt-4 btn-primary py-3">View Details</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
