import Image from "next/image";
import Link from "next/link";
import shapeCircleBlue from "@/assets/images/shape-circle_blue.png";
import shapeCircleRed from "@/assets/images/shape-circle_red.png";
import mobileHeroSectionImage from "@/assets/images/m-heroSectionImage.png";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div>
          <p className="title">Make your dream business goal come true</p>
          <p className="description">
            when you need us for improve your business, then come with us to
            help your business have reach it, you just sit and feel that goal.
          </p>
          <Link href="#" className="button-contained">
            Start Project
          </Link>
          <div>
            <Image className="shape-blue" src={shapeCircleBlue} alt="" />
            <Image className="shape-red" src={shapeCircleRed} alt="" />
          </div>
        </div>
        <Image src={mobileHeroSectionImage} width="330" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
