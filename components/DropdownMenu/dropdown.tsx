import React, { useState } from 'react';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
      >
        Womens Fashion ▼
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded z-50">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Home & Lifestyle
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Medicine
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sports & Outdoor
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Babys & Toys
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Groceries & Pets
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Health & Beauty
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
