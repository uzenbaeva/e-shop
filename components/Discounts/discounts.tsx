import Image from 'next/image';
import './carousel.css';
import iPhoneImage from '@/public/assets/hero_endframe.png';
import appleLogo from '@/public/assets/Frame 563.png';
import CategoryMenu from '../Dropdowns/CategoryMenu';
import DropdownMenu from '../Dropdowns/DropdownMenu';

const Carousel = () => {
  return (
    <>
      <section className="section-carousel">
        <div className="text-white py-8 container mx-auto">
          <div className="carousel-block">
          <div className="drops">
          <DropdownMenu />
          <CategoryMenu />
        </div>
          <div className="carousel">
            <div className="slide">
              <div className="slide-text">
                <Image
                  src={appleLogo}
                  alt="applelogo"
                  className="slide-logo"
                  width={144}
                  height={10}
                />
                <p>Up to 10% <br /> off Voucher</p>
                <a href="#" className="shop-button">
                  Shop Now ->
                </a>
              </div>
              <div className="slideImg">
                <Image
                  src={iPhoneImage}
                  alt="iPhone 14"
                  className="slide-image"
                />
              </div>
            </div>
            <div className="dots">
              <span className="dot "></span>
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
