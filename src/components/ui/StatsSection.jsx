"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Package, Truck, Shield, Award, Clock } from "lucide-react";

const stats = [
  {
    id: 1,
    value: 50000,
    suffix: "+",
    label: "Happy Customers",
    description: "Served worldwide",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    value: 10000,
    suffix: "+",
    label: "Products Delivered",
    description: "Across 50+ countries",
    icon: Package,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 3,
    value: 98.7,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Customer happiness",
    icon: Award,
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Always here to help",
    icon: Clock,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 5,
    value: 2,
    suffix: " days",
    label: "Fast Delivery",
    description: "Average shipping time",
    icon: Truck,
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
  {
    id: 6,
    value: 365,
    suffix: " days",
    label: "Warranty",
    description: "Product protection",
    icon: Shield,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
  },
];

const Counter = ({ end, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, isInView, duration]);

  return (
    <span ref={nodeRef} className="text-4xl md:text-5xl font-bold">
      {Math.floor(count)}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Numbers That Speak
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;re proud of our journey and the impact we&apos;ve made on
              our customers
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700">
                {/* Icon */}
                <div
                  className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>

                {/* Counter */}
                <div
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                >
                  {isInView ? (
                    <Counter end={stat.value} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <stat.icon className="w-full h-full" />
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>

              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Global Reach Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-linear-to-r from-primary-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden"
        >
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Global Reach, Local Touch
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  We deliver happiness to customers across 50+ countries while
                  maintaining the personal touch of a local business.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <span>Real-time Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                    <span>Secure Payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Countries" },
                  { value: "150+", label: "Cities" },
                  { value: "24h", label: "Support" },
                  { value: "99%", label: "Uptime" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-white/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M45.5,-62.6C58.5,-53.5,68.2,-38.1,72.5,-21.8C76.7,-5.5,75.5,11.8,69.7,27.5C63.9,43.2,53.6,57.4,40.1,65.4C26.6,73.5,9.9,75.4,-4.4,73.5C-18.7,71.6,-32.3,65.9,-43.4,56.6C-54.5,47.3,-63.1,34.4,-67.5,19.9C-71.9,5.4,-72.1,-10.7,-67.5,-25.4C-63,-40.1,-53.8,-53.4,-41.3,-62.6C-28.7,-71.9,-12.8,-77.1,1.9,-79.9C16.6,-82.7,33.2,-83.1,45.5,-62.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
