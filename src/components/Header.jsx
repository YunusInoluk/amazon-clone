import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const style = {
  header:
    "flex items-center h-[60px] bg-secondary px-3 sticky top-0 text-white",
  logo: "object-fit w-[100px]",
  headerOptions: "flex flex-col mx-4",
  optionsTop: "option-top text-xs",
  optionsBottom: "font-bold font-sm",
  searchBar: "flex flex-1 h-full py-3",
  searchInput: "flex flex-1 rounded-l",
  searchIcon: "bg-primary !h-full min-w-max py-1 px-2 rounded-r text-secondary",
};
function Header() {
  return (
    <div className={style.header}>
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="amazon logo"
        className={style.logo}
      />
      <div className={style.headerOptions}>
        <span className={style.optionsTop}>Delivery to</span>
        <span className={style.optionsBottom}>Turkey</span>
      </div>
      <div className={style.searchBar}>
        <input type="text" className={style.searchInput} />
        <SearchIcon className={style.searchIcon} />
      </div>
      <div className={style.headerOptions}>
        <span className={style.optionsTop}>Hello, Sign in</span>
        <span className={style.optionsBottom}>Account & Lists</span>
      </div>
      <div className={style.headerOptions}>
        <span className={style.optionsTop}>Returns</span>
        <span className={style.optionsBottom}>& Orders</span>
      </div>
      <div>
        <ShoppingCartIcon />
        <span>0</span>
      </div>
    </div>
  );
}

export default Header;
