import { HiOutlinePlay } from "react-icons/hi";
import aboutSectionImage from "@/assets/images/aboutSectionImage.png";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <p className="title">About Us</p>
        <p className="subtitle">Our Teammate</p>
        <div className="image-and-content">
          <div className="content">
            <p className="description">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business!
              <br />
              <br />
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <div className="btns">
              <Link href="#" className="button-contained">
                Start Project
              </Link>
              <Link href="#" className="button-outlined">
                <HiOutlinePlay size={20} style={{ marginRight: 8 }} />
                Courses
              </Link>
            </div>
          </div>
          <div className="image">
            <Image src={aboutSectionImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
