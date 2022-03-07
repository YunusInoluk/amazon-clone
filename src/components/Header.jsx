import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  return (
    <div className="flex items-center h-[60px] bg-secondary px-3 sticky top-0 text-white">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="amazon logo"
        className="object-fit w-[100px]"
      />
      <div className="flex flex-col mx-4">
        <span className="option-top text-xs">Delivery to</span>
        <span className="option-bottom font-bold font-sm">Turkey</span>
      </div>
      <div className="search-bar flex flex-1 h-full py-3 ">
        <input type="text" className=" flex flex-1 rounded-l" />
        <SearchIcon className="bg-primary !h-full min-w-max py-1 px-2 rounded-r text-secondary " />
      </div>
      <div className="flex flex-col mx-4">
        <span className="option-top text-xs">Hello, Sign in</span>
        <span className="option-bottom font-bold font-sm">Account & Lists</span>
      </div>
      <div className="flex flex-col mx-4">
        <span className="option-top text-xs">Returns</span>
        <span className="option-bottom font-bold font-sm">& Orders</span>
      </div>
      <div>
        <ShoppingCartIcon />
        <span>0</span>
      </div>
    </div>
  );
}

export default Header;
