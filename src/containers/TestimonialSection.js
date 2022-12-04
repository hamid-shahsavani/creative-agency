import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import tesimonialProfileOne from "@/assets/images/testimonial-profile-1.png";
import tesimonialProfileTwo from "@/assets/images/testimonial-profile-2.png";
import tesimonialProfileTree from "@/assets/images/testimonial-profile-3.png";
import tesimonialProfileFour from "@/assets/images/testimonial-profile-4.png";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <p className="title">Testimonial</p>
        <p className="subtitle">People Talk about us</p>
        <div className="cards">
          <Swiper
            spaceBetween={25}
            slidesPerView={'auto'}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: true,
                initialSlide: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              }
            }}
          >
            <SwiperSlide>
              <div className="card">
                <div className="body">
                  <Image src={tesimonialProfileOne} width="70" alt="" />
                  <div>
                    <p className="name">Angel Rose</p>
                    <p className="specialty">Creative Manager</p>
                  </div>
                </div>
                <p className="content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="body">
                  <Image src={tesimonialProfileTwo} width="70" alt="" />
                  <div>
                    <p className="name">Alex</p>
                    <p className="specialty">Creative Manager</p>
                  </div>
                </div>
                <p className="content">
                  “consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="body">
                  <Image src={tesimonialProfileTree} width="70" alt="" />
                  <div>
                    <p className="name">Yamato</p>
                    <p className="specialty">Creative Manager</p>
                  </div>
                </div>
                <p className="content">
                  “consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="body">
                  <Image src={tesimonialProfileFour} width="70" alt="" />
                  <div>
                    <p className="name">Senpai</p>
                    <p className="specialty">Creative Manager</p>
                  </div>
                </div>
                <p className="content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet”
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
