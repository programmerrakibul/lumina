const ProductCardSkeleton = () => {
  return (
    <div className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-gray-50/50 to-transparent"></div>

      <div className="relative">
        <div className="aspect-square bg-gray-200"></div>

        <div className="p-4 sm:p-5 md:p-6 space-y-4">
          <div className="w-20 h-5 bg-gray-300 rounded-full"></div>

          <div className="space-y-2">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          </div>

          <div className="space-y-1">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="w-24 h-8 bg-gray-300 rounded"></div>
            <div className="w-full h-12 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
