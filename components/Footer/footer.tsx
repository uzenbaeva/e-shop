import React from 'react';
import icon1 from '@/public/assets/Primer-QR-koda-kotoryj-vedet-na-sajt-1.png';
import icon2 from '@/public/assets/pngwing.com (5).png';
import icon3 from '@/public/assets/klipartz.com (1).png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h5 className="font-bold mb-4">Exclusive</h5>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-4">Support</h5>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h5 className="font-bold mb-4">Account</h5>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4">Quick Link</h5>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4">Download App</h5>
          <p>Save $3 With App New User Only</p>
          <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            <div className="flex justify-center"></div>

            <div className="flex flex-col space-y-4">
              <a href="#" className="block"></a>
              <a href="#" className="block"></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-800 pt-4">
          <p>© Copyright Rimel 2024. All rights reserved</p>
          <div className="flex justify-center space-x-8 mt-8">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
