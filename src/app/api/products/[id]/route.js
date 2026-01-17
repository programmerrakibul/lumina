import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const id = (await params).id?.trim();

    if (!id || id.length !== 24) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid product ID",
        },
        {
          status: 400,
        },
      );
    }

    await connectDB();

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Product retrieved successfully",
      product,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Failed to retrieve product",
    });
  }
};
