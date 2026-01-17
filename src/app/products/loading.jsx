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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="aspect-square bg-gray-200 dark:bg-dark-700 rounded-lg mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-2/3"></div>
                  <div className="h-12 bg-gray-200 dark:bg-dark-700 rounded mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductsLoading;
