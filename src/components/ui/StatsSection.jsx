"use client";

import {
  Users,
  Package,
  Truck,
  Shield,
  Award,
  Clock,
  Globe,
  CheckCircle,
  Zap,
  TrendingUp,
} from "lucide-react";
import Container from "./Container";

const stats = [
  {
    id: 1,
    value: "50000+",
    label: "Happy Customers",
    description: "Served worldwide with satisfaction",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
    trend: "+12% this month",
  },
  {
    id: 2,
    value: "10000+",
    label: "Products Delivered",
    description: "Across 50+ countries",
    icon: Package,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    borderColor: "border-emerald-200",
    trend: "+8% growth",
  },
  {
    id: 3,
    value: "98.7%",
    label: "Satisfaction Rate",
    description: "Customer happiness score",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-200",
    trend: "Industry leading",
  },
  {
    id: 4,
    value: "24/7",
    label: "Support Available",
    description: "Always here to help",
    icon: Clock,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    trend: "Instant response",
  },
  {
    id: 5,
    value: "2 days",
    label: "Fast Delivery",
    description: "Average shipping time",
    icon: Truck,
    color: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
    trend: "Faster than average",
  },
  {
    id: 6,
    value: "365 days",
    label: "Warranty Coverage",
    description: "Product protection guarantee",
    icon: Shield,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    borderColor: "border-cyan-200",
    trend: "Full year coverage",
  },
];

const globalStats = [
  { value: "50+", label: "Countries", icon: Globe },
  { value: "150+", label: "Cities", icon: TrendingUp },
  { value: "24h", label: "Support", icon: Clock },
  { value: "99%", label: "Uptime", icon: Zap },
];

const StatsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      <Container className="relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full border border-gray-200 mb-4 sm:mb-6">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-sm sm:text-base font-semibold">
              Our Impact in Numbers
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block">Numbers That</span>
            <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tell Our Story
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real metrics that showcase our commitment to excellence and customer
            satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            return (
              <div
                key={stat.id}
                className={`group relative bg-white rounded-xl sm:rounded-2xl border-2 ${stat.borderColor} p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                  index % 2 === 0 ? "lg:mt-0" : "lg:mt-4"
                }`}
              >
                {/* Icon */}
                <div
                  className={`${stat.bgColor} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon
                    className={`w-7 h-7 sm:w-8 sm:h-8 ${stat.color}`}
                  />
                </div>

                {/* Counter */}
                <div className="flex items-baseline gap-2 mb-2 sm:mb-3">
                  <div
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold ${stat.color}`}
                  >
                    {stat.value}
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {stat.trend}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base">
                  {stat.description}
                </p>

                {/* Progress Bar (for satisfaction rate) */}
                {stat.id === 3 && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Satisfaction Score</span>
                      <span>{stat.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                )}

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Global Reach Banner */}
        <div className="relative bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                              radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
                backgroundSize: "100px 100px",
              }}
            ></div>
          </div>

          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className="text-sm sm:text-base font-semibold text-white">
                    Global Presence
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Worldwide Service,
                  <br />
                  <span className="text-blue-100">Local Care</span>
                </h3>

                <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8">
                  We deliver exceptional service across 50+ countries while
                  maintaining the personal touch of a local business.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { text: "Real-time tracking", icon: CheckCircle },
                    { text: "Secure payments", icon: Shield },
                    { text: "Easy returns", icon: Truck },
                    { text: "Multi-currency", icon: TrendingUp },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <feature.icon className="w-5 h-5 text-green-300" />
                      <span className="text-white text-sm sm:text-base">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Global Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {globalStats.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20"
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                    >
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                      {item.value}
                    </div>
                    <div className="text-blue-100 text-sm sm:text-base">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Customer Retention",
                value: "92%",
                description: "Clients who return within 6 months",
                progress: 92,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Order Accuracy",
                value: "99.5%",
                description: "Perfect order fulfillment rate",
                progress: 99.5,
                color: "from-emerald-500 to-green-500",
              },
              {
                title: "Response Time",
                value: "< 2 min",
                description: "Average support response time",
                progress: 95,
                color: "from-purple-500 to-pink-500",
              },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {metric.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {metric.description}
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-linear-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
            {[
              { name: "Visa", color: "text-blue-700" },
              { name: "Mastercard", color: "text-red-600" },
              { name: "PayPal", color: "text-blue-500" },
              { name: "Stripe", color: "text-purple-600" },
              { name: "SSL", color: "text-green-600" },
            ].map((company, index) => (
              <div
                key={index}
                className={`text-xl sm:text-2xl font-bold ${company.color} opacity-80 hover:opacity-100 transition-opacity`}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
