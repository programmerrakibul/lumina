"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/utils/uploadImage";

const AddProductForm = () => {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const categories = [
    "electronics",
    "clothing",
    "books",
    "home",
    "sports",
    "beauty",
  ];

  const onSubmit = async (data) => {
    try {
      const imageFile = data.image[0];
      const image = await uploadImage(imageFile);

      // In production, this would upload to your API
      const productData = {
        ...data,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        rating: parseFloat(data.rating),
        image,
      };

      // Post to API route
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        },
      );

      const result = await response.json();

      console.log(result);

      if (result.success) {
        toast.success("Product added successfully!");
        // reset();
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Product Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          Product Image
        </label>
        <input
          {...register("image", { required: "Product image is required" })}
          type="file"
          className="input-field"
          placeholder="Upload product image"
        />
        {errors.image && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.image.message}
          </p>
        )}
      </div>

      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Product Name *
        </label>
        <input
          {...register("name", { required: "Product name is required" })}
          type="text"
          className="input-field"
          placeholder="Enter product name"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description *
        </label>
        <textarea
          {...register("description", { required: "Description is required" })}
          rows={4}
          className="input-field"
          placeholder="Describe your product..."
        />
        {errors.description && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Price & Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
              $
            </span>
            <input
              {...register("price", {
                required: "Price is required",
                min: { value: 0.01, message: "Price must be greater than 0" },
              })}
              type="number"
              step="0.01"
              className="input-field pl-8"
              placeholder="0.00"
            />
          </div>
          {errors.price && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.price.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category *
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            className="input-field"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.category.message}
            </p>
          )}
        </div>
      </div>

      {/* Stock & Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Stock Quantity *
          </label>
          <input
            {...register("stock", {
              required: "Stock quantity is required",
              min: { value: 0, message: "Stock cannot be negative" },
            })}
            type="number"
            className="input-field"
            placeholder="0"
          />
          {errors.stock && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.stock.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Rating
          </label>
          <input
            {...register("rating", {
              min: { value: 0, message: "Rating cannot be negative" },
              max: { value: 5, message: "Rating cannot exceed 5" },
            })}
            type="number"
            step="0.1"
            className="input-field"
            placeholder="4.5"
            defaultValue={0}
          />
          {errors.rating && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.rating.message}
            </p>
          )}
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Tags (comma separated)
        </label>
        <input
          {...register("tags")}
          type="text"
          className="input-field"
          placeholder="wireless, premium, audio"
        />
      </div>

      {/* Featured */}
      <div className="flex items-center">
        <input
          {...register("featured")}
          type="checkbox"
          id="featured"
          className="h-4 w-4 text-primary-600 rounded border-gray-300 dark:border-dark-700 focus:ring-primary-500"
        />
        <label
          htmlFor="featured"
          className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
        >
          Mark as featured product
        </label>
      </div>

      {/* Submit Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          type="submit"
          disabled={uploading}
          className="flex-1 btn-primary py-3 text-lg"
        >
          {uploading ? "Adding Product..." : "Add Product"}
        </button>
        <button
          type="button"
          onClick={() => {
            reset();
            setImagePreview("");
          }}
          className="flex-1 btn-secondary py-3 text-lg"
        >
          Reset Form
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
