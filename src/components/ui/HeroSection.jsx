"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Premium Collection</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Discover Amazing
              <span className="text-primary-600 dark:text-primary-400 block">
                Products
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Shop the latest trends in electronics, fashion, home goods, and
              more. Quality products with fast delivery.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary inline-flex items-center justify-center">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-100 lg:h-125 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-primary-500/20 to-purple-500/20" />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-white mb-4">
                    50% OFF
                  </div>
                  <p className="text-xl text-white/90">
                    Summer Sale Collection
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
