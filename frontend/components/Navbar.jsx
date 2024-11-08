"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [menuItems, setMenuItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchNavItems = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/navitems?sort=order:asc`
      );
      const data = await res.json();
      setMenuItems(
        data.data.map((item) => ({
          Label: item.name,
          URL: item.slug,
          Sorszam: item.order,
        }))
      );
    };
    fetchNavItems();
  }, []);

  return (
    <header className="relative h-screen bg-cover bg-center">
      <nav className="border-gray-200 z-10 relative bg-opacity-70 backdrop-brightness-75">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}/bg_remove_logo_1830fa5c96.png`}
              className="h-24"
              alt="Fonalbaba"
            />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-muted rounded-lg md:hidden"
            onClick={toggleMenu}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <motion.div
            className={`${isOpen ? "block" : "hidden"} w-full md:hidden`}
            id="navbar-default"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-accent ">
              {menuItems
                .sort((a, b) => a.Sorszam - b.Sorszam)
                .map((item) => (
                  <li key={item.Sorszam}>
                    <a
                      href={item.URL}
                      className="block py-2 px-3 text-black rounded"
                    >
                      {item.Label}
                    </a>
                  </li>
                ))}
            </ul>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-row space-x-8 md:mt-0 md:border-0">
              {menuItems.map((item) => (
                <li key={item.Sorszam}>
                  <Link
                    href={item.URL}
                    className="relative inline-block py-2 px-3 text-white font-bold transition duration-300 group hover:text-muted"
                  >
                    {item.Label}
                    <span className="absolute left-1/2 bottom-0 h-0.5 w-full bg-muted transform -translate-x-1/2 scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
