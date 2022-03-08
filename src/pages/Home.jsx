import React, { useEffect } from "react";
import Product from "../components/Product";
import SimpleSlider from "../components/Slider";
import products from "../products.js";

function Home() {
  return (
    <div className="home">
      <SimpleSlider />
      <div className="flex flex-wrap w-full">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
