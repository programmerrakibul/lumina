"use client";

import { ArrowRight, Sparkles, ShoppingBag, Check } from "lucide-react";
import Container from "./Container";

const HeroSection = () => {
  const features = [
    "Free shipping on orders $50+",
    "30-day return policy",
    "Secure checkout",
    "24/7 customer support",
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-blue-50 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg shadow-blue-500/25 animate-pulse">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-semibold">
                Limited Time Offer
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900">Discover Amazing</span>
                <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Products
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Shop the latest trends in electronics, fashion, home goods, and
                more. Quality products with{" "}
                <span className="font-semibold text-blue-600">
                  fast delivery
                </span>
                .
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
              <button className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Shop Now</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>

              <button className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <span className="text-base sm:text-lg">Watch Demo</span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-gray-200">
              {[
                { value: "10K+", label: "Products" },
                { value: "500+", label: "Brands" },
                { value: "50K+", label: "Customers" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-linear-to-br from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Image Container */}
              <div className="aspect-square md:aspect-video lg:aspect-square relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10"></div>

                {/* Product Display */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="relative w-full max-w-md mx-auto">
                    {/* Product Card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform rotate-3">
                      <div className="flex items-center justify-between mb-6">
                        <div className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full">
                          50% OFF
                        </div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-5 h-5 text-amber-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      <div className="relative aspect-square bg-linear-to-br from-blue-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center">
                        <ShoppingBag className="w-24 h-24 text-blue-600 opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-gray-900">
                              SUMMER
                            </div>
                            <div className="text-2xl font-semibold text-blue-600">
                              SALE
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          Premium Collection
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Limited time offer ends soon
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-3xl font-bold text-gray-900">
                              $299
                            </span>
                            <span className="text-lg text-gray-400 line-through ml-2">
                              $598
                            </span>
                          </div>
                          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg p-3 transform rotate-12">
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Free</div>
                        <div className="text-lg font-bold text-green-600">
                          Shipping
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-lg p-3 transform -rotate-6">
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Fast</div>
                        <div className="text-sm font-bold text-blue-600">
                          Delivery
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Trusted</div>
                  <div className="text-xs text-gray-600">by 50K+ users</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center pt-12">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
