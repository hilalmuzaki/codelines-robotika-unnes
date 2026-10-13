import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function PrimaryNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Menutup menu jika user klik di luar area navbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav ref={navRef}>
      <div className="w-full bg-neutral text-white fixed top-0 z-[99999]">
        <div className="flex justify-between px-4 sm:px-12 lg:px-24 items-center gap-4">
          <div className="w-fit">
            <Link to="/" onClick={closeMenu} className="flex w-fit gap-2 items-center py-5">
              <p className="body-style">ROBOTIKA UNNES</p>
              <p className="hidden sm:flex label-style">UKM RIPTEK</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-[36px] xl:gap-[50px] text-sm">
            <NavLink to="/tentang" label="ABOUT US" />
            <NavLink to="/program" label="PROGRAMS" />
            <NavLink to="/tentang" label="FAQ" />
            <NavLink to="/kontak" label="CONTACT" />
          </ul>

          {/* get in touch */}
          <p className="body-style">
              GET IN TOUCH
          </p>

          {/* Mobile Hamburger Button */}
          <div className="hidden items-center">
            <button
              className="items-center flex focus:outline-none"
              type="button"
              id="hamburgerbutton"
              aria-label={isOpen ? "Tutup menu" : "Buka menu navigasi"}
              aria-controls="menumobile"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              {isOpen ? (
                /* Close Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="block size-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="block size-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            id="menumobile"
            className="lg:hidden transition-all duration-300 ease-in-out"
          >
            <div className="absolute flex flex-col w-full top-[51px] bg-green-700 text-lg z-[99998]">
              <ul className="flex flex-col items-center text-sm">
                <NavLink
                  to="/tentang"
                  label="ABOUT US"
                  mobile
                  onClick={closeMenu}
                />
                <NavLink
                  to="/program"
                  label="PROGRAMS"
                  mobile
                  onClick={closeMenu}
                />
                <NavLink
                  to="/tentang"
                  label="FAQ"
                  mobile
                  onClick={closeMenu}
                />
                <NavLink
                  to="/kontak"
                  label="CONTACT"
                  mobile
                  onClick={closeMenu}
                />
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
