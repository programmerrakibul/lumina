import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    const body = await req.json();

    // Validate required fields
    const requiredFields = ["name", "description", "price", "category"];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `Product ${field} is required` },
          { status: 400 },
        );
      }
    }

    // Create new product
    const product = new Product({
      name: body.name,
      description: body.description,
      price: Number(body.price),
      category: body.category,
      imageURL: body.imageURL,
      rating: Number(body.rating),
      stock: Number(body.stock),
      featured: body.featured,
      tags: body.tags && body.tags.split(",").map((tag) => tag.trim()),
    });

    await product.save();

    return NextResponse.json(
      { success: true, message: "Product created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating product:", error);

    return NextResponse.json(
      { success: false, message: error.message || "Failed to create product" },
      { status: error.status || 500 },
    );
  }
};
