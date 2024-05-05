import React, { useState } from "react";
import { RxHamburgerMenu, RxCaretDown,RxHeartFilled  } from "react-icons/rx";
import { IoMdCart } from "react-icons/io";

import "../index.css";

function Navbar() {
  const navbarList = ["Home", "Shop", "Shop Detail", "Pages", "Contact"];

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center bg-[#3D464D] border-b-2 fixed top-0 z-50 text-white px-20">
        <div className="flex justify-center items-center gap-2">
          <div
            className="flex items-center gap-3 bg-[#FFD333] text-black py-3 px-5 cursor-pointer"
            onClick={handleShow}
          >
            <RxHamburgerMenu />
            <h1 className="text-xl font-semibold">Categories</h1>
            <span className="ml-24 text-xl">
              {" "}
              <RxCaretDown />{" "}
            </span>
          </div>
          <div className="hidden cursor-pointer justify-center items-center gap-6 text-[1rem]  lg:flex xl:flex  2xl:flex ml-10 py-4">
            {navbarList.map((item, idx) => (
              <h1
                key={idx}
                className={`hover:text-[#FFD333] ${
                  idx == 0 ? "text-[#FFD333]" : ""
                }`}
              >
                {item}{" "}
              </h1>
            ))}
          </div>
        </div>
        <div className="text-[#FFD333] flex text-2xl gap-3">
            
        <RxHeartFilled />
        <IoMdCart/>
        </div>
      </div>
      {show && (
        <div className="text-gray-400 left-20 absolute top-14 text-xl bg-white w-72 w-">
          <h1>Dresse</h1>
          <h1>Shirts</h1>
          <h1>Jeans</h1>
        </div>
      )}
    </>
  );
}

export default Navbar;
