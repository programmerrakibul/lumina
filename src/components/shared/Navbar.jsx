"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import Link from "next/link";
import Container from "../ui/Container";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, isLoading, logout } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about-us" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                LUMINA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <p>Loading..</p>
            ) : (
              <>
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/add-product"
                      className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-600 text-black hover:bg-primary-700 transition-colors"
                    >
                      Add Product
                    </Link>
                    <button
                      onClick={logout}
                      className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
                    >
                      Logout
                    </button>
                    <div className="relative">
                      <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-600 text-black hover:bg-primary-700 transition-colors"
                  >
                    Login
                  </Link>
                )}
              </>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-dark-700 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!isLoading && (
                <>
                  {isAuthenticated ? (
                    <>
                      <Link
                        href="/add-item"
                        className="py-2 text-primary-600 dark:text-primary-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Add Product
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                        className="py-2 text-left text-gray-700 dark:text-gray-300"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      className="py-2 text-primary-600 dark:text-primary-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
