import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import icon1 from '@/public/assets/pngwing.com (1).png';
import icon2 from '@/public/assets/pngwing.com 2.png';
import icon3 from '@/public/assets/pngwing.com3.png';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <Link href="/" legacyBehavior>
            <a>
              <Image src={logo} alt="Logo" width={50} height={50} />
            </a>
          </Link>
          <span className="ml-2 text-xl font-bold">My Shop</span>
        </div>
        <nav>
          <Link href="/login" legacyBehavior>
            <a className="text-lg">Login</a>
          </Link>
        </nav>
      </div>
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <span className="text-2xl font-bold text-black">Exclusive</span>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Sign Up
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-gray-400 flex-grow"
              />
              <Image src={icon1} alt="search" width={20} height={20} />
            </div>
            <a href="#" className="text-gray-600 hover:text-black">
              <Image src={icon2} alt="desire" width={20} height={20} />
            </a>

            <a href="#" className="text-gray-600 hover:text-black">
              <Image src={icon3} alt="basket" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
