import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";

const getProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`,
    );
    const data = await res.json();
    return data?.products || [];
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <section className="py-10">
        <Container>
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our carefully curated collection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductsPage;
