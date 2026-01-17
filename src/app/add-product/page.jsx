"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AddProductForm from "@/components/forms/AddProductForm";

const AddProductPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <section className="py-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Add New Product
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Fill in the details to add a new product to our collection
              </p>
            </div>

            <AddProductForm onSubmittingChange={setIsSubmitting} />

            {isSubmitting && (
              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-blue-700 dark:text-blue-400 text-center">
                  Submitting product...
                </p>
              </div>
            )}
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default AddProductPage;
