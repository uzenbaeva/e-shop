import { useState } from 'react';

const CategoryMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    {
      women: 'Womens Fashion',
      mens: 'Mens Fashion',
      home: 'Home & Lifestyle',
      medicine: 'Medicine',
      sports: 'Sports & Outdoor',
      babys: 'Babys & Toys',
      groceries: 'Groceries & Pets',
      health: 'Health & Beauty',
    },
  ];

  return (
    <div className="relative  container mx-auto ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white text-black font-semibold rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
      >
        Categories ▼
      </button>
      {!isOpen &&
        categories.map((item, index) => (
          <div
            key={index}
            className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded z-50"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.women}</p>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.mens}</p>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.home}</p>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.medicine}</p>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.sports}</p>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.babys}</p>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.groceries}</p>
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <p>{item.health}</p>
            </a>
          </div>
        ))}
    </div>
  );
};

export default CategoryMenu;
