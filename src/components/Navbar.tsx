import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigations } from '../lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-5 z-50 w-full bg-transparent pb-10">
      <nav
        className="relative max-w-[66rem] border border-neutral-700 rounded-[28px] py-3 px-5 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto bg-white dark:bg-gray-900 shadow-md"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <span className="text-indigo-500 text-2xl font-bold">BUDGET</span>
            <Link to="/" aria-label="Home" className="flex items-center rounded-md text-xl font-semibold">
              <img src="/logo.svg" alt="Logo" id="logo" width={45} height={45} />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="flex justify-center items-center text-sm font-semibold rounded-full bg-gray-200 p-2 dark:bg-gray-800 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div id="navbar-collapse" className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            {navigations.map((nav) => (
              <Link key={nav.hash} to={nav.hash} className="text-sm  md:py-4 hover:text-primary dark:text-white dark:hover:text-gray-300">
                {nav.name}
              </Link>
            ))}

            <div>
              {/* Dashboard Button */}
              <Link
                to="/dashboard" // Use Link component from react-router-dom
                className="button-primary"
                aria-label="Dashboard"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}