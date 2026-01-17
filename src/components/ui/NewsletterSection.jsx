"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Shield, Gift, Sparkles } from "lucide-react";
import { toast } from "sonner";
import Container from "./Container";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Successfully subscribed to our newsletter!");
      setIsSubscribed(true);
      setEmail("");

      // Reset subscription status after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Deals",
      description: "Get access to members-only discounts and promotions",
    },
    {
      icon: Sparkles,
      title: "New Arrivals",
      description: "Be the first to know about our latest products",
    },
    {
      icon: Shield,
      title: "No Spam",
      description: "We respect your privacy and never share your data",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 via-purple-500/5 to-pink-500/5" />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-primary-500 to-purple-500 text-white mb-6">
              <Send className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Stay Updated</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Never Miss a Deal
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive offers, new product
              alerts, and insider tips delivered straight to your inbox.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Subscription Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              {isSubscribed ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    You&apos;re Subscribed!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Thank you for joining our newsletter. Check your inbox for a
                    welcome gift.
                  </p>
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="btn-primary"
                  >
                    Subscribe Another Email
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Join Our Newsletter
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-24"
                          required
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="absolute right-2 top-2 px-6 py-2 bg-linear-to-r from-primary-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                          {isSubmitting ? "Subscribing..." : "Subscribe"}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 text-primary-600 rounded border-gray-300 dark:border-dark-700 focus:ring-primary-500"
                        required
                      />
                      <label
                        htmlFor="terms"
                        className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        I agree to receive marketing emails and accept the{" "}
                        <a
                          href="#"
                          className="text-primary-600 hover:underline"
                        >
                          privacy policy
                        </a>
                      </label>
                    </div>
                  </form>

                  {/* Stats */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          50K+
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Subscribers
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          99%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Satisfaction
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          0
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Spam
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-primary-500 to-purple-500 flex items-center justify-center">
                      <benefit.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <div className="ml-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Special Offer Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Welcome Gift</h4>
                  <Gift className="h-6 w-6" />
                </div>
                <p className="mb-4">
                  Get <span className="font-bold">15% OFF</span> your first
                  purchase when you subscribe to our newsletter.
                </p>
                <div className="text-sm opacity-90">
                  Offer valid for new subscribers only. One-time use.
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { name: "Google", logo: "G" },
                { name: "Microsoft", logo: "M" },
                { name: "Apple", logo: "A" },
                { name: "Amazon", logo: "A" },
                { name: "Spotify", logo: "S" },
              ].map((company) => (
                <div
                  key={company.name}
                  className="text-2xl font-bold text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                >
                  {company.logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSection;
