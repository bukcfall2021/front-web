import React from "react";
import { Link } from "react-router-dom";

const options = [
  {
    heading: "About us",
    subOptions: [
      {
        name: "Events",
        url: "",
      },
      {
        name: "Blogs",
        url: "",
      },
      {
        name: "FAQs",
        url: "",
      },
    ],
  },
  {
    heading: "Main Menu",
    subOptions: [
      {
        name: "Home",
        url: "",
      },
      {
        name: "Menu",
        url: "",
      },
    ],
  },
  {
    heading: "Contact Us",
    subOptions: [
      {
        name: "example@email.com",
        url: "#",
      },
      {
        name: "+64 958 248 966",
        url: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-black py-10">
      <div className="grid grid-cols-2  md:grid-cols-3 gap-6">
        {options.map((item) => (
          <div key={item.heading}>
            <h2 className="text-lg font-semibold mb-3 text-primary">{item.heading}</h2>
            <ul className="">
              {item.subOptions.map((subOption) => (
                <li key={subOption.name}>
                  <Link to={subOption.url} className="text-black text-sm hover:text-gray-100">
                    {subOption.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6">
        <p className="text-center text-sm">Copyright © 2023 Dscode | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
