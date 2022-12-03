import portfolioCardOne from "@/assets/images/portfolio-card-1.png";
import portfolioCardTwo from "@/assets/images/portfolio-card-2.png";
import portfolioCardTree from "@/assets/images/portfolio-card-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <p className="title">Our Portfolio</p>
        <p className="subtitle">What do we do</p>
        <p className="description">
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>
        <div className="cards">
          <Swiper
            initialSlide={1}
            spaceBetween={25}
            loop={true}
            modules={[Autoplay]}
            slidesPerView="auto"
            autoplay={{
              delay: 2500,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <Link href="#" className="card">
                <Image className="image" src={portfolioCardOne} alt="" />
                <p className="title">Design Furniture App</p>
                <div className="overlay"></div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#" className="card">
                <Image className="image" src={portfolioCardTwo} alt="" />
                <p className="title">Cloud App</p>
                <div className="overlay"></div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="#" className="card">
                <Image className="image" src={portfolioCardTree} alt="" />
                <p className="title">Design Byte App</p>
                <div className="overlay"></div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <Link href="#" className="button-outlined btn">
          See All Portfolio
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
