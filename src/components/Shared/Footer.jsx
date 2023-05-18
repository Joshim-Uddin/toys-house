import React from "react";
import logo from "./../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-5">
      <div className="flex flex-col w-full">
        <div className="grid lg:grid-cols-4 lg:gap-2 grid-cols-1">
          <div className="mb-2">
            <img src={logo} alt="" className="w-20" />
            <p>A house of All car toys in different categories</p>
          </div>
          <div className="footer__section mb-5">
            <h3 className="footer__title mb-2 text-2xl">Services</h3>
            <ul className="footer__list flex flex-col gap-2">
              <li className="footer__item">Toy Car Sales</li>
              <li className="footer__item">Toy Car Customization</li>
              <li className="footer__item">Toy Car Servicing</li>
            </ul>
          </div>
          <div className="footer__section flex flex-col gap-2 mb-5">
            <h3 className="footer__title text-2xl">Contact</h3>
            <ul className="footer__list flex flex-col gap-2">
              <li className="footer__item">123 Toy Lane, City</li>
              <li className="footer__item">Email: info@toyshouse.com</li>
              <li className="footer__item">Phone: 123-456-7890</li>
            </ul>
            <ul className="footer__list flex gap-4">
              <li className="footer__item">
                <Link to="https://www.facebook.com/">
                  <FaFacebook />
                </Link>
              </li>
              <li className="footer__item">
                <Link to="https://www.instagram.com/">
                  <FaInstagram />
                </Link>
              </li>
              <li className="footer__item">
                <Link to="https://www.twitter.com/">
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__title mb-2 text-2xl">About</h3>
            <p className="footer__description">
              Toys House of Car is a premier destination for high-quality car
              toys. We offer a wide selection of realistic and captivating toys
              for young car enthusiasts.
            </p>
          </div>
        </div>
        <hr className="border-2 w-full my-2" />
        <p className="text-center w-11/12 mx-auto">
          &copy;Copyrights Toys House 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
