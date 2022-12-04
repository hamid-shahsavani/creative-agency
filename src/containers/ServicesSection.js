import servicesBoxOne from "@/assets/images/services_box-1.png";
import servicesBoxTwo from "@/assets/images/services_box-2.png";
import servicesBoxTree from "@/assets/images/services_box-3.png";
import servicesBoxFour from "@/assets/images/services_box-4.png";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="content">
          <p className="title">Services</p>
          <p className="subtitle">Perfect and Fast Movement</p>
          <p className="description">
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business!
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
  );
};

export default ServicesSection;
