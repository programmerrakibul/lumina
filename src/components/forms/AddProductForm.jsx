"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { uploadImage } from "@/utils/uploadImage";

const AddProductForm = () => {
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
      setUploading(true);
      const imageFile = data.image[0];
      const image = await uploadImage(imageFile);

      const productData = {
        ...data,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        rating: parseFloat(data.rating) || 0,
        image,
      };

      console.log(productData);

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

      if (result.success) {
        toast.success("Product added successfully!");
        reset();
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
      console.error("Error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Product Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Image *
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
          <input
            {...register("image", { required: "Product image is required" })}
            type="file"
            accept="image/*"
            className="w-full"
          />
        </div>
        <p className="mt-1 text-sm text-gray-500">PNG, JPG, GIF up to 5MB</p>
        {errors.image && (
          <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
        )}
      </div>

      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Name *
        </label>
        <input
          {...register("name", { required: "Product name is required" })}
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          placeholder="Enter product name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description *
        </label>
        <textarea
          {...register("description", { required: "Description is required" })}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
          placeholder="Enter product description"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Price & Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              $
            </span>
            <input
              {...register("price", {
                required: "Price is required",
                min: { value: 0.01, message: "Price must be greater than 0" },
              })}
              type="number"
              step="0.01"
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="0.00"
            />
          </div>
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category *
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>
      </div>

      {/* Stock & Rating */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Stock Quantity *
          </label>
          <input
            {...register("stock", {
              required: "Stock quantity is required",
              min: { value: 0, message: "Stock cannot be negative" },
            })}
            type="number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            placeholder="0"
          />
          {errors.stock && (
            <p className="mt-1 text-sm text-red-600">{errors.stock.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating (0-5)
          </label>
          <input
            {...register("rating", {
              min: { value: 0, message: "Rating cannot be negative" },
              max: { value: 5, message: "Rating cannot exceed 5" },
            })}
            type="number"
            step="0.1"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            placeholder="4.5"
            defaultValue={0}
          />
          {errors.rating && (
            <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
          )}
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags (comma separated)
        </label>
        <input
          {...register("tags")}
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          placeholder="wireless, premium, audio"
        />
        <p className="mt-1 text-sm text-gray-500">Separate tags with commas</p>
      </div>

      {/* Featured Checkbox */}
      <div className="flex items-center">
        <input
          {...register("featured")}
          type="checkbox"
          id="featured"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
          Mark as featured product
        </label>
      </div>

      {/* Submit Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          type="submit"
          disabled={uploading}
          className={`flex-1 py-3 px-6 rounded-lg font-medium text-white transition-colors ${
            uploading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {uploading ? "Adding Product..." : "Add Product"}
        </button>

        <button
          type="button"
          onClick={() => reset()}
          className="flex-1 py-3 px-6 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Reset Form
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
