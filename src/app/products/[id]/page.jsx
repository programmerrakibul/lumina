import Image from "next/image";
import { Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";

const getProduct = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`,
    );

    const data = await res.json();
    return data?.product || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const ProductDetailPage = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={product.imageURL}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 text-sm font-medium">
              {product.category}
            </span>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-500 dark:text-gray-400">
                ({product.reviews} reviews)
              </span>
              <span
                className={`text-sm font-medium px-2 py-1 rounded ${
                  product.stock > 0
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </span>
            </div>
          </div>

          <div>
            <span className="text-5xl font-bold text-primary-600 dark:text-primary-400">
              ${product.price.toFixed(2)}
            </span>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {product.description}
            </p>
          </div>

          {/* Add to Cart */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 dark:border-dark-700 rounded-lg">
                <button className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700">
                  -
                </button>
                <span className="px-6 py-3 text-lg font-medium">1</span>
                <button className="px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700">
                  +
                </button>
              </div>

              <button className="flex-1 btn-primary flex items-center justify-center space-x-2 py-4">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="btn-secondary py-3">Buy Now</button>
              <button className="btn-secondary py-3">Add to Wishlist</button>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-dark-700">
            <div className="text-center">
              <Truck className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Free Shipping
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                2-Year Warranty
              </p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                30-Day Returns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(product.specifications || {}).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between py-3 border-b border-gray-200 dark:border-dark-700"
            >
              <span className="text-gray-600 dark:text-gray-400">{key}</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
