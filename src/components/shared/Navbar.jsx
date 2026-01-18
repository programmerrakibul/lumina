"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import Container from "../ui/Container";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, isLoading, logout } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-menu") && userMenuOpen) {
        setUserMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [userMenuOpen]);

  return (
    <>
      <nav
        className={`sticky! top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-lg border-b border-gray-100"
            : "border-b border-gray-100"
        }`}
      >
        <Container className="container mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-2 sm:gap-3 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-linear-to-r from-amber-500 to-orange-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    LUMINA
                  </span>
                  <span className="text-xs text-gray-500 -mt-1 hidden sm:block">
                    Premium Shopping
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-linear-to-r from-blue-50 to-purple-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* User Menu */}
              {!isLoading && (
                <div className="relative user-menu">
                  {isAuthenticated ? (
                    <>
                      <button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <div className="w-9 h-9 bg-linear-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform ${userMenuOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* User Dropdown Menu */}
                      {userMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 animate-fade-in">
                          <div className="p-4 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-linear-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">
                                  John Doe
                                </p>
                                <p className="text-sm text-gray-500">
                                  Premium Member
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            {[
                              {
                                label: "My Profile",
                                href: "",
                              },
                              {
                                label: "Add Product",
                                href: "/add-product",
                              },
                              {
                                label: "Wishlist",
                                href: "",
                              },
                              {
                                label: "Settings",
                                href: "",
                              },
                            ].map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                                onClick={() => setUserMenuOpen(false)}
                              >
                                <span className="text-gray-700">
                                  {item.label}
                                </span>
                              </Link>
                            ))}
                            <button
                              onClick={() => {
                                logout();
                                setUserMenuOpen(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 transition-colors mt-2"
                            >
                              Logout
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href="/login"
                      className="flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
                    >
                      <User className="w-4 h-4" />
                      <span className="hidden sm:inline">Login</span>
                    </Link>
                  )}
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-50 rounded-xl transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl animate-slide-down">
            <Container className="py-6">
              {/* Navigation Links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-colors ${
                    pathname === item.href
                      ? "bg-linear-to-r from-blue-50 to-purple-50 text-blue-600"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </Container>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
