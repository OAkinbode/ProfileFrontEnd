import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p className="text-sm text-gray-600">Page links:</p>
      <div className="mt-2 flex flex-wrap justify-center">
        <a
          href="https://github.com/OAkinbode?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 mb-2 text-blue-600 hover:text-blue-800"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/olusolaakinbode/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 mb-2 text-blue-600 hover:text-blue-800"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
