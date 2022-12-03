import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tesimonialProfile from "@/assets/images/testimonial-profile.png";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <p className="title">Testimonial</p>
        <p className="subtitle">People Talk about us</p>
        <div className="cards">
          <Swiper
            initialSlide={1}
            spaceBetween={25}
            centeredSlides={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="card">
                <div className="body">
                  <Image src={tesimonialProfile} width="70" alt="" />
                  <div>
                    <p className="name">Angel Rose</p>
                    <p className="specialty">Creative Manager</p>
                  </div>
                </div>
                <p className="content">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="body">
                  <Image src={tesimonialProfile} width="70" alt="" />
                  <div>
                    <p className="name">Alex</p>
                    <p className="specialty">Creative Manager</p>
                  </div>
                </div>
                <p className="content">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="body">
                  <Image src={tesimonialProfile} width="70" alt="" />
                  <div>
                    <p className="name">Yamato</p>
                    <p className="specialty">Creative Manager</p>
                  </div>
                </div>
                <p className="content">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
