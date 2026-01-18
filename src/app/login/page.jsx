"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { LogIn, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "rakibul@gmail.com",
      password: "password123",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await login(data.email, data.password);

      if (res.success) {
        toast.success("Successfully logged in!");
        router.push(callbackUrl || "/");
      }
    } catch {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 to-white flex items-center justify-center py-8 sm:py-12 md:py-16">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-5">
        {/* Main Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 sm:mb-6">
                <LogIn className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Welcome Back
              </h1>

              <p className="text-gray-600 text-base sm:text-lg">
                Sign in to your account to continue
              </p>
            </div>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 sm:space-y-8"
            >
              <div className="space-y-5 sm:space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500 text-gray-900"
                      placeholder="you@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-2 px-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500 text-gray-900"
                      placeholder="••••••••"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters",
                        },
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-500 mt-2 px-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || isSubmitting}
                className={`w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isLoading || isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
              >
                {isLoading || isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
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
                    <span className="text-lg">Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <LogIn className="w-5 h-5" />
                    <span className="text-lg">Sign In</span>
                  </div>
                )}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-medium text-gray-900">
                  Demo Credentials:
                </span>
                <br className="sm:hidden" />
                <span className="text-gray-700">
                  {" "}
                  rakibul@gmail.com / password123
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
