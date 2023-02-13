import "./Shop_mainstyle.css";
import React from "react";
import Simg from "../images/image-2.jpg"
import ShopProduct from "../Components/shopProduct"

const Shop_main = () => {
  return (
    <div>
      <div className="shop-sec">
        <div className="shop-comp-1">
            <img src={Simg} alt="" />
        </div>
      </div>
      <ShopProduct/>
    </div>
  );
};

export default Shop_main;
