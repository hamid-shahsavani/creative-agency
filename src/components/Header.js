import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header-mobile">
          <div className="header-mobile_left">
            <Link href="#" className="logo">
              <Image src={logo} alt="" />
              <div>
                <p>Agency</p>
                <span>Creative</span>
              </div>
            </Link>
          </div>
          <div className="header-mobile_right">
            <HiMenuAlt1
              size={27}
              color="#e2e2e2"
              onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
            />
          </div>
        </div>
        {isShowMenuMobile ? (
          <div className="menu-mobile">
            <div className="container">
              <div className="top">
                <Link href="#" className="logo">
                  <Image src={logo} alt="" />
                  <div>
                    <p>Agency</p>
                    <span>Creative</span>
                  </div>
                </Link>
                <HiOutlineX
                  size={27}
                  color="#e2e2e2"
                  onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
                />
              </div>
              <div>
                <nav>
                  <ul className="bottom">
                    <li>
                      <Link href="#">Home</Link>
                    </li>
                    <li>
                      <Link href="#about">About</Link>
                    </li>
                    <li>
                      <Link href="#services">Services</Link>
                    </li>
                    <li>
                      <Link href="#projects">Projects</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
