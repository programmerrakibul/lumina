import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import Container from "@/components/ui/Container";

const ProductsLoading = () => {
  return (
    <>
      <section className="py-10">
        <Container>
          <div className="mb-12 text-center animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-dark-700 rounded-lg max-w-md mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded-lg max-w-2xl mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(10)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductsLoading;
