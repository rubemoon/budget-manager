import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`mt-auto mb-5 px-4 text-center text-gray-500 ${className}`}>
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} by Brand Pro | Built with ❤️ by{" "}
        <a
          href="https://www.rubensjeansimon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Rubens Jean Simon
        </a>
      </small>
    </footer>
  );
};

export default Footer;