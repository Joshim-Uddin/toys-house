import React from "react";
import Map from "./Map";

const AboutUsPage = () => {
  return (
    <div className="custom-container px-3 grid lg:grid-cols-2 grid-cols-1 items-center justify-center my-4 gap-8">
      <div>
        <h2 className="text-3xl mb-3">About Us</h2>
        <p className="text-justify lg:text-xl mb-3">
          Welcome to Car Toys House! We are passionate about bringing joy to car
          enthusiasts of all ages. Our mission is to provide high-quality and
          exciting car toys that ignite imaginations and create unforgettable
          memories.
        </p>
        <p className="text-justify lg:text-xl mb-3">
          With a wide range of car toys, from classic models to
          remote-controlled wonders, we have something for everyone. Whether
          you&apos;re a collector, a parent looking for the perfect gift, or a
          kid eager to embark on thrilling adventures, Car Toys House is the
          ultimate destination for all things car toys.
        </p>
        <p className="text-justify lg:text-xl mb-3">
          At Car Toys House, we believe in quality and durability. We carefully
          select our products from trusted manufacturers who share our
          commitment to excellence. Each toy is designed to withstand hours of
          play and deliver endless fun.
        </p>
        <p className="text-justify lg:text-xl mb-3">
          Our dedicated team of car enthusiasts is always here to assist you. If
          you have any questions or need recommendations, feel free to reach out
          to us. We take pride in our exceptional customer service and strive to
          ensure your experience with Car Toys House is nothing short of
          amazing.
        </p>
        <p className="text-justify lg:text-xl mb-3">
          Thank you for choosing Car Toys House as your go-to source for car
          toys. Start exploring our collection today and let the adventure
          begin!
        </p>
      </div>
      <Map />
    </div>
  );
};

export default AboutUsPage;
