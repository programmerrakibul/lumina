import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { AuthProvider } from "@/hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LUMINA",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-dark-900 transition-colors`}
      >
        <AuthProvider>
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
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
