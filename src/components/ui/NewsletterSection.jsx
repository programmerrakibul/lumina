"use client";

import { useState, useRef } from "react";
import {
  Send,
  Check,
  Shield,
  Gift,
  Sparkles,
  TrendingUp,
  Bell,
  Lock,
  Star,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { sleep } from "@/utils/sleep";
import Container from "./Container";

const benefits = [
  {
    icon: Gift,
    title: "Exclusive Deals",
    description: "Get access to members-only discounts and early sales",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: Sparkles,
    title: "New Arrivals",
    description: "Be the first to know about our latest products",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    title: "No Spam Promise",
    description: "We respect your privacy and never share your data",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Bell,
    title: "Product Updates",
    description: "Get notified about restocks and price drops",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

const stats = [
  { value: "50K+", label: "Active Subscribers", trend: "+2.5K this month" },
  { value: "99%", label: "Open Rate", trend: "Industry leading" },
  { value: "4.8/5", label: "Satisfaction", trend: "Based on reviews" },
  { value: "0", label: "Spam Complaints", trend: "Zero tolerance" },
];

const trustBadges = [
  { name: "Google", color: "text-blue-600" },
  { name: "Microsoft", color: "text-green-600" },
  { name: "Apple", color: "text-gray-900" },
  { name: "Amazon", color: "text-amber-600" },
  { name: "Spotify", color: "text-green-500" },
  { name: "Adobe", color: "text-red-600" },
];

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
      await sleep(1500);

      toast.success("🎉 Successfully subscribed to our newsletter!");
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

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tr from-purple-200/20 to-transparent rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px),
                            linear-gradient(180deg, #000 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <Container className="relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full border border-gray-200 mb-4 sm:mb-6">
            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-sm sm:text-base font-semibold">
              Stay Connected
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block">Never Miss</span>
            <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              A Great Deal
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for exclusive offers, new product
            alerts, and insider tips delivered straight to your inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Subscription Form */}
          <div className="relative">
            {isSubscribed ? (
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  You&apos;re Subscribed! 🎉
                </h3>

                <p className="text-gray-600 text-base sm:text-lg mb-8">
                  Thank you for joining our newsletter. Check your inbox for a
                  welcome gift with{" "}
                  <span className="font-bold text-green-600">15% OFF</span> your
                  first purchase.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Subscribe Another Email
                  </button>
                  <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors">
                    Browse Products
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Bell className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Join Our Newsletter
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Get exclusive access to deals and updates
                    </p>
                  </div>
                </div>

                {/* Subscription Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Enter your email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="absolute right-2 top-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-4 w-4 text-white"
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
                            Subscribing...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Subscribe
                            <Send className="w-4 h-4" />
                          </span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Privacy Terms */}
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                      <input
                        type="checkbox"
                        id="terms"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        required
                      />
                    </div>
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to receive marketing emails and accept the{" "}
                      <a
                        href="#"
                        className="text-blue-600 font-medium hover:underline"
                      >
                        Privacy Policy
                      </a>
                      . You can unsubscribe at any time.
                    </label>
                  </div>

                  {/* Quick Stats */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 mb-1">
                            {stat.label}
                          </div>
                          <div className="text-xs text-green-600 font-medium">
                            {stat.trend}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </form>

                {/* Security Badge */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span>Your email is secure and private</span>
                </div>
              </div>
            )}

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl -z-10 opacity-10 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl -z-10 opacity-10 blur-xl"></div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6 sm:space-y-8">
            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`${benefit.bgColor} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <benefit.icon
                      className={`w-6 h-6 sm:w-7 sm:h-7 ${benefit.iconColor}`}
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Offer Card */}
            <div className="relative bg-linear-to-r from-amber-500 via-orange-500 to-pink-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, white 2%, transparent 0%)`,
                    backgroundSize: "50px 50px",
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white">
                      Welcome Gift
                    </h4>
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <span className="text-white font-bold text-sm">
                      LIMITED
                    </span>
                  </div>
                </div>

                <p className="text-white/90 text-base sm:text-lg mb-6">
                  Get <span className="font-bold text-white">15% OFF</span> your
                  first purchase when you subscribe to our newsletter.
                </p>

                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Zap className="w-4 h-4" />
                  <span>
                    Offer valid for new subscribers only. One-time use.
                  </span>
                </div>

                {/* Countdown Timer (Visual Only) */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">
                      Offer expires in:
                    </span>
                    <div className="flex gap-2">
                      <div className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        <span className="text-white font-bold">24</span>
                        <span className="text-white/80 text-xs ml-1">HRS</span>
                      </div>
                      <div className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        <span className="text-white font-bold">59</span>
                        <span className="text-white/80 text-xs ml-1">MIN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-bold text-gray-900">
                  Community Growth
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">+2.5K</div>
                  <div className="text-sm text-gray-600">
                    New subscribers this month
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">92%</div>
                  <div className="text-sm text-gray-600">
                    Stay subscribed after 3 months
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
            {trustBadges.map((company) => (
              <div
                key={company.name}
                className={`text-xl sm:text-2xl font-bold ${company.color} opacity-80 hover:opacity-100 transition-opacity hover:scale-105`}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>

        {/* Success Rate Banner */}
        <div className="mt-12 bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-300 fill-current" />
              <span className="text-lg font-bold">4.8/5 Satisfaction Rate</span>
            </div>
            <span className="text-green-100">
              Based on 10,000+ newsletter reviews
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSection;
