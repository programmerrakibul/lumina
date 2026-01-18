const ProductDetailSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-pulse">
        {/* Image Skeleton */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          {/* Thumbnails Skeleton */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg"
              ></div>
            ))}
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-6">
          {/* Category & Title */}
          <div className="space-y-4">
            <div className="w-24 h-6 bg-gray-200 rounded-full"></div>
            <div className="h-12 bg-gray-300 rounded"></div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-5 h-5 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="w-20 h-5 bg-gray-200 rounded"></div>
              <div className="w-24 h-6 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Price & Description */}
          <div className="space-y-4">
            <div className="w-40 h-12 bg-gray-300 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-32 h-12 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 h-12 bg-gray-300 rounded-xl"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center space-y-2">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto"></div>
                <div className="w-20 h-4 bg-gray-200 rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Skeleton */}
      <div className="mt-16">
        <div className="h-8 w-48 bg-gray-300 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex justify-between py-3 border-b border-gray-200"
            >
              <div className="w-32 h-4 bg-gray-200 rounded"></div>
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
