import ProductDetailsPage from "@/pages/ProductDetailsPage";

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

const page = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(id);

  return <ProductDetailsPage product={product} />;
};

export default page;
