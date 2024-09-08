import React from 'react';
import Image from 'next/image';
import grcode from '@/public/assets/Qrcode 1.png';
import google from '@/public/assets/google-play.png';
import apple from '@/public/assets/appstore.png';
import facebook from '@/public/assets/Icon-Facebook.png';
import group from '@/public/assets/Group.png';
import insta from '@/public/assets/insta.png';
import vectorIn from '@/public/assets/VectorIn.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 container mx-auto">
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
          <p className="mt-3 text-sm">Save $3 with App New User Only</p>

          <div className="flex flex-col md:flex-row items-center justify-start mt-2 space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <Image src={grcode} alt="GrCode" width={70} height={70} />
            </div>

            <div>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={google} alt="Google App" width={90} height={90} />
              </a>
              <a
                className="mt-2"
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={apple} alt="Apple Store" width={90} height={90} />
              </a>
            </div>
          </div>

          <div className="flex justify-between space-x-9 mt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f text-white text-2xl">
                <Image src={facebook} alt="Facebook" width={20} height={20} />
              </i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-white text-2xl">
                <Image src={group} alt="Twitter" width={20} height={20} />
              </i>
            </a>
            <a
              href="https://www.instagram.com/uzenbaeva.1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-white text-2xl">
                <Image src={insta} alt="Instagram" width={20} height={20} />
              </i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in text-white text-2xl">
                <Image src={vectorIn} alt="IN" width={20} height={20} />
              </i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center w-96">
          <p className="text-gray-400 text-sm">
            © Copyright Rimel {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
