import React, { useState } from "react";
import heroimg from "/assets/Hero/heroimg.png";
import play from "/assets/Hero/play.png";
import ProductCard from "../../components/ProductCard";
import sandwich from "/assets/Hero/sandwich.png";
import main from "/assets/Hero/main.png";
import icecream from "/assets/Hero/icecream.png";
import all from "/assets/Hero/all.png";
import next from "/assets/Hero/next.png";
import back from "/assets/Hero/back.png";
import testimonials from "/assets/Hero/testimonials.png";
import people from "/assets/Hero/people.png";
import star from "/assets/Hero/star.png";
import ProductModal from "../../components/modals/ProductModal";

const items = [
  {
    icon: main,
    title: "Main Dish",
    desc: "(86 Dishes)",
  },
  {
    icon: sandwich,
    title: "Breakfast",
    desc: "(12 Breakfast)",
  },
  {
    icon: icecream,
    title: "Dessert",
    desc: "(48 Dessert)",
  },
  {
    icon: all,
    title: "Browse All",
    desc: "(255 Items)",
  },
];

const HomePage = () => {
  const [productModalIsOpen, setProductModalIsOpen] = useState(false);
  return (
    <div>
      <div //hero section
        className="flex mt-10"
      >
        <div className="flex-col pr-20">
          <h1 className="text-5xl font-bold mt-20">
            Dive into Delights Of Delectable <span className="text-primary">Food</span>
          </h1>
          <h2 className="mt-10 pr-10">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </h2>
          <div className="flex mt-10 gap-x-4">
            <button className="bg-primary py-2.5 px-4 rounded-full text-white shadow-lg shadow-orange-300">
              Order Now
            </button>
            <button className="font-semibold">Watch Video</button>
            <button className="rounded-full py-1 px-3 shadow-lg shadow-gray-300">
              <img src={play} alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <img src={heroimg} alt="" />
      </div>

      <div //categories section
        className="mt-28"
      >
        <p className="text-primary font-bold tracking-widest text-xs text-center">CUSTOMER FAVORITES</p>
        <h1 className="text-center text-4xl font-bold mt-4 mb-4">Popular Categories</h1>
        <div className="flex gap-x-16 mt-10">
          {items.map((item, index) => (
            <div key={index} className="rounded-2xl py-5 px-12 shadow-lg">
              <div className="bg-orange-300 rounded-full py-4">
                <img src={item.icon} alt="" className="w-28 h-20" />
              </div>
              <p className="text-lg font-semibold mt-2 text-center">{item.title}</p>
              <p className="text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div //standout dishes
        className="mt-28"
      >
        <p className="text-primary font-bold tracking-widest text-xs ">SPECIAL DISHES</p>
        <div className="flex">
          <h1 className=" text-4xl font-bold mt-4 mb-4">Standout Dishes From Our Menu</h1>
          <div className="flex gap-x-6 ml-[20rem]">
            <button className="rounded-full bg-gray-200 h-12 px-5">
              <img src={back} alt="" className="w-2 h-3" />
            </button>
            <button className="rounded-full bg-primary h-12 px-5">
              <img src={next} alt="" className="w-2 h-3" />
            </button>
          </div>
        </div>
        <div className="w-full mt-10 grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
          {Array(3)
            .fill(null)
            .map((item, index) => (
              <ProductCard
                onClick={() => {
                  setProductModalIsOpen(true);
                }}
                key={index}
              />
            ))}
        </div>
      </div>

      <div //testimonials
        className="flex mt-24 mb-10"
      >
        <img src={testimonials} alt="" className="w-[50rem] h-[30rem]" />
        <div className="flex-col mt-24">
          <p className="text-primary font-bold tracking-widest text-xs ">TESTIMONIALS</p>
          <h1 className=" text-4xl font-bold mt-4 mb-4">What Our Customers Say About Us</h1>
          <p className="text-gray-500">
            “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The
            attention to detail in presentation and service was impeccable”
          </p>
          <div className="flex mt-8">
            <img src={people} alt="" />
            <div className="flex-col ml-6">
              <p className="font-semibold">Customer Feedback</p>
              <div className="flex gap-x-2">
                <img src={star} alt="" className="w-4 h-4 mt-1" />
                <p className="font-medium">4.9</p>
                <p className="text-sm text-gray-500 mt-0.5 font-medium">(18.6k Reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductModal open={productModalIsOpen} setOpen={setProductModalIsOpen} />
    </div>
  );
};

export default HomePage;
