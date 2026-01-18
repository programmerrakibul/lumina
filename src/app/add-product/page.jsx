import Container from "@/components/ui/Container";
import AddProductForm from "@/components/forms/AddProductForm";

const AddProductPage = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 bg-gray-50">
      <Container>
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Add New Product
            </h1>
            <p className="text-gray-600">Fill in the product details below</p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <AddProductForm />
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>All fields marked with * are required</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AddProductPage;
