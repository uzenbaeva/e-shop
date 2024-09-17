import React from 'react';
import Image from 'next/image';
import Monitor from '@/public/assets/g27cq4-500x500 1.png';
import likeicon from '@/public/assets/Fill Heart.png';
import eyeicon from '@/public/assets/Fill Eye.png';
const ProductCard: React.FC = () => {
  return (
    <div className="flex relative  container mx-auto">
      <div className="max-w-xs rounded overflow-hidden shadow-lg p-10 pt-10 bg-white">
        <div className="relative">
          <div className="flex items-center">
            <div className="w-14 mb-3 bg-red-500 text-white px-2 py-1 rounded text-sm">
              -30%
            </div>
            <div className="flex gap-3 pl-20">
              <Image
                className="w-30 h-30 object-cover"
                src={likeicon}
                alt="Icon Like"
              />
              <Image
                className="w-30 h-30 object-cover"
                src={eyeicon}
                alt="Icon Eye"
              />
            </div>
          </div>
          <Image
            className="w-full h-40 object-cover"
            src={Monitor}
            alt="Gaming Monitor"
          />
        </div>

        <div className="py-4">
          <h3 className="font-semibold text-lg text-gray-800">
            IPS LCD Gaming Monitor
          </h3>
          <div className="flex items-center space-x-2 my-2">
            <span className="text-red-500 text-xl font-bold">$370</span>
            <span className="text-gray-400 line-through">$400</span>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.197c.97 0 1.371 1.24.588 1.81l-3.397 2.465a1 1 0 00-.363 1.118l1.287 3.976c.299.921-.755 1.688-1.538 1.118l-3.397-2.465a1 1 0 00-1.175 0l-3.397 2.465c-.783.57-1.837-.197-1.538-1.118l1.287-3.976a1 1 0 00-.363-1.118L2.22 9.402c-.783-.57-.382-1.81.588-1.81h4.197a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">(99)</span>
          </div>
        </div>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg p-10 pt-10 bg-white">
        <div className="relative">
          <div className="flex items-center">
            <div className="w-14 mb-3 bg-red-500 text-white px-2 py-1 rounded text-sm">
              -30%
            </div>
            <div className="flex gap-3 pl-20">
              <Image
                className="w-30 h-30 object-cover"
                src={likeicon}
                alt="Icon Like"
              />
              <Image
                className="w-30 h-30 object-cover"
                src={eyeicon}
                alt="Icon Eye"
              />
            </div>
          </div>
          <Image
            className="w-full h-40 object-cover"
            src={Monitor}
            alt="Gaming Monitor"
          />
        </div>

        <div className="py-4">
          <h3 className="font-semibold text-lg text-gray-800">
            IPS LCD Gaming Monitor
          </h3>
          <div className="flex items-center space-x-2 my-2">
            <span className="text-red-500 text-xl font-bold">$370</span>
            <span className="text-gray-400 line-through">$400</span>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.197c.97 0 1.371 1.24.588 1.81l-3.397 2.465a1 1 0 00-.363 1.118l1.287 3.976c.299.921-.755 1.688-1.538 1.118l-3.397-2.465a1 1 0 00-1.175 0l-3.397 2.465c-.783.57-1.837-.197-1.538-1.118l1.287-3.976a1 1 0 00-.363-1.118L2.22 9.402c-.783-.57-.382-1.81.588-1.81h4.197a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">(99)</span>
          </div>
        </div>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg p-10 pt-10 bg-white">
        <div className="relative">
          <div className="flex items-center">
            <div className="w-14 mb-3 bg-red-500 text-white px-2 py-1 rounded text-sm">
              -30%
            </div>
            <div className="flex gap-3 pl-20">
              <Image
                className="w-30 h-30 object-cover"
                src={likeicon}
                alt="Icon Like"
              />
              <Image
                className="w-30 h-30 object-cover"
                src={eyeicon}
                alt="Icon Eye"
              />
            </div>
          </div>
          <Image
            className="w-full h-40 object-cover"
            src={Monitor}
            alt="Gaming Monitor"
          />
        </div>

        <div className="py-4">
          <h3 className="font-semibold text-lg text-gray-800">
            IPS LCD Gaming Monitor
          </h3>
          <div className="flex items-center space-x-2 my-2">
            <span className="text-red-500 text-xl font-bold">$370</span>
            <span className="text-gray-400 line-through">$400</span>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.197c.97 0 1.371 1.24.588 1.81l-3.397 2.465a1 1 0 00-.363 1.118l1.287 3.976c.299.921-.755 1.688-1.538 1.118l-3.397-2.465a1 1 0 00-1.175 0l-3.397 2.465c-.783.57-1.837-.197-1.538-1.118l1.287-3.976a1 1 0 00-.363-1.118L2.22 9.402c-.783-.57-.382-1.81.588-1.81h4.197a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">(99)</span>
          </div>
        </div>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg p-10 pt-10 bg-white">
        <div className="relative">
          <div className="flex items-center">
            <div className="w-14 mb-3 bg-red-500 text-white px-2 py-1 rounded text-sm">
              -30%
            </div>
            <div className="flex gap-3 pl-20">
              <Image
                className="w-30 h-30 object-cover"
                src={likeicon}
                alt="Icon Like"
              />
              <Image
                className="w-30 h-30 object-cover"
                src={eyeicon}
                alt="Icon Eye"
              />
            </div>
          </div>
          <Image
            className="w-full h-40 object-cover"
            src={Monitor}
            alt="Gaming Monitor"
          />
        </div>

        <div className="py-4">
          <h3 className="font-semibold text-lg text-gray-800">
            IPS LCD Gaming Monitor
          </h3>
          <div className="flex items-center space-x-2 my-2">
            <span className="text-red-500 text-xl font-bold">$370</span>
            <span className="text-gray-400 line-through">$400</span>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.197c.97 0 1.371 1.24.588 1.81l-3.397 2.465a1 1 0 00-.363 1.118l1.287 3.976c.299.921-.755 1.688-1.538 1.118l-3.397-2.465a1 1 0 00-1.175 0l-3.397 2.465c-.783.57-1.837-.197-1.538-1.118l1.287-3.976a1 1 0 00-.363-1.118L2.22 9.402c-.783-.57-.382-1.81.588-1.81h4.197a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">(99)</span>
          </div>
        </div>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg p-10 pt-10 bg-white">
        <div className="relative">
          <div className="flex items-center">
            <div className="w-14 mb-3 bg-red-500 text-white px-2 py-1 rounded text-sm">
              -30%
            </div>
            <div className="flex gap-3 pl-20">
              <Image
                className="w-30 h-30 object-cover"
                src={likeicon}
                alt="Icon Like"
              />
              <Image
                className="w-30 h-30 object-cover"
                src={eyeicon}
                alt="Icon Eye"
              />
            </div>
          </div>
          <Image
            className="w-full h-40 object-cover"
            src={Monitor}
            alt="Gaming Monitor"
          />
        </div>

        <div className="py-4">
          <h3 className="font-semibold text-lg text-gray-800">
            IPS LCD Gaming Monitor
          </h3>
          <div className="flex items-center space-x-2 my-2">
            <span className="text-red-500 text-xl font-bold">$370</span>
            <span className="text-gray-400 line-through">$400</span>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.197c.97 0 1.371 1.24.588 1.81l-3.397 2.465a1 1 0 00-.363 1.118l1.287 3.976c.299.921-.755 1.688-1.538 1.118l-3.397-2.465a1 1 0 00-1.175 0l-3.397 2.465c-.783.57-1.837-.197-1.538-1.118l1.287-3.976a1 1 0 00-.363-1.118L2.22 9.402c-.783-.57-.382-1.81.588-1.81h4.197a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">(99)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
