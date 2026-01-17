import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-dark-900 transition-colors`}
      >
        <header>
          <Navbar />
        </header>

        <main className="space-y-16 md:space-y-24">{children}</main>

        <Footer />

        <Toaster
          position="top-right"
          toastOptions={{
            className: "dark:bg-dark-800 dark:text-white",
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
