import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-end space-x-4 py-4">
        <li>
          <a
            href="/"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="/Projects"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
