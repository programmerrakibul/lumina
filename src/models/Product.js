import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [100, "Product name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["electronics", "clothing", "books", "home", "sports", "beauty"],
      trim: true,
      lowercase: true,
    },
    imageURL: {
      type: String,
      default: `https://picsum.photos/seed/${Date.now()}/400/400`,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

// Update the updatedAt field on save
productSchema.pre("save", function () {
  this.updatedAt = new Date().toISOString();
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
