"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Shirt, Book, Home, Dumbbell, Heart } from "lucide-react";
import Container from "./Container";

const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Latest gadgets & devices",
    count: 245,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
    icon: Smartphone,
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Fashion",
    description: "Trendy clothes & accessories",
    count: 189,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    icon: Shirt,
    color: "bg-pink-500",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    name: "Books",
    description: "Educational & entertaining reads",
    count: 156,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    icon: Book,
    color: "bg-amber-500",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    name: "Home & Living",
    description: "Furniture & decor items",
    count: 312,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    icon: Home,
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    name: "Sports & Fitness",
    description: "Equipment & accessories",
    count: 134,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    icon: Dumbbell,
    color: "bg-purple-500",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 6,
    name: "Beauty & Health",
    description: "Skincare & wellness products",
    count: 278,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    icon: Heart,
    color: "bg-red-500",
    gradient: "from-red-500 to-pink-500",
  },
];

const CategoriesSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our wide range of categories to find exactly what
              you&apos;re looking for
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-64 md:h-72">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  {/* Icon */}
                  <div
                    className={`${category.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Category Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200 mb-3">{category.description}</p>

                    {/* Item Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">
                        {category.count} items
                      </span>

                      {/* Shop Now Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-colors"
                      >
                        Shop Now →
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  hoveredCategory === category.id
                    ? { opacity: 1, scale: 1 }
                    : {}
                }
                className="absolute top-4 right-4 bg-white dark:bg-dark-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
              >
                Popular
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-8 py-4 bg-linear-to-r from-primary-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300">
            View All Categories
            <span className="ml-2">⟶</span>
          </button>
        </motion.div>

        {/* Stats Banner */}
        <div className="mt-16 bg-linear-to-r from-primary-500/10 to-purple-500/10 dark:from-primary-500/5 dark:to-purple-500/5 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Products" },
              { value: "500+", label: "Brands" },
              { value: "50K+", label: "Customers" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
