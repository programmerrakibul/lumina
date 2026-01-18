"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await login(data.email, data.password);

      if (res.success) {
        toast.success("Successfully logged in!");
        router.push(callbackUrl || "/");
      }
    } catch {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
            <LogIn className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email address
              </label>
              <input
                type="email"
                className="input-field"
                placeholder="you@example.com"
                defaultValue="rakibul@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
                defaultValue="password123"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <button
            disabled={isSubmitting}
            className="w-full btn-primary py-3 text-lg"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default LoginPage;
