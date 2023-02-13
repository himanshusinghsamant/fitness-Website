import React from "react";
import "./shopProStyle.css";
import {PRODUCTS} from '../Products'
import ProductItems from './ProItems'
// import shopimg from '../images/diet-1.jpg'

const shopProduct = () => {
  return (
    <div>
      <div className="shop-pro-comp-1">
          <h1>Best T-shirts for you</h1>
            <div className="products">
                {PRODUCTS.map((product)=>{
                  return <ProductItems data={product}/>
                })}
            </div>
        </div>
        {/* <ProductItems image={shopimg}/> */}
      </div>
  );
};

export default shopProduct;
