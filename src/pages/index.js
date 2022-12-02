import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
import { HiOutlinePlay, HiOutlineArrowRight } from "react-icons/hi";
import mobileHeroSectionImage from "@/assets/images/m-heroSectionImage.png";
import mobileAboutSectionImage from "@/assets/images/m-aboutSectionImage.png";
import servicesBoxOne from "@/assets/images/services_box-1.png";
import servicesBoxTwo from "@/assets/images/services_box-2.png";
import servicesBoxTree from "@/assets/images/services_box-3.png";
import servicesBoxFour from "@/assets/images/services_box-4.png";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <div className="container">
            <p className="title">Make your dream business goal come true</p>
            <p className="description">
              when you need us for improve your business, then come with us to
              help your business have reach it, you just sit and feel that goal.
            </p>
            <Link href="#" className="button-contained">
              Start Project
            </Link>
            <Image src={mobileHeroSectionImage} width="330" alt="" />
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div>
              <p className="title">About Us</p>
              <p className="subtitle">Our Teammate</p>
              <p className="description">
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business!
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
              <Image src={mobileAboutSectionImage} width="300" alt="" />
            </div>
          </div>
        </section>
        <section id="services">
          <div className="container">
            <div>
              <p className="title">Services</p>
              <p className="subtitle">Our Teammate</p>
              <p className="description">
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business!
              </p>
              <Link href="#" className="button">
                <p>Read More</p>
                <HiOutlineArrowRight size={20} />
              </Link>
            </div>
            <div className="boxs">
              <div className="box-1">
                <div className="image">
                  <Image src={servicesBoxOne} width="45" alt="" />
                </div>
                <div className="text">Social Media Management</div>
              </div>
              <div className="box-2">
                <div className="image">
                  <Image src={servicesBoxTwo} width="45" alt="" />
                </div>
                <div className="text">Search Engine Opimization</div>
              </div>{" "}
              <div className="box-3">
                <div className="image">
                  <Image src={servicesBoxTree} width="45" alt="" />
                </div>
                <div className="text">Design</div>
              </div>{" "}
              <div className="box-4">
                <div className="image">
                  <Image src={servicesBoxFour} width="45" alt="" />
                </div>
                <div className="text">Ads</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
