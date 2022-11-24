import { Link } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Navbar() {
  return (
    <nav className="max-w-full flex flex-row justify-between items-center w-full gap-10 p-5 bg-slate-200 ">
      <div className="text-2xl font-bold cursor-pointer">Logo</div>
      <div className="flex flex-row gap-5 font-medium cursor-pointer">
        <h1>Women</h1>
        <h1>Men</h1>
        <h1>Kids</h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="p-1 px-2 rounded-lg outline-none w-80 "
        />
        <SearchOutlinedIcon />
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-2">
          <LoginOutlinedIcon />
          <h1>Sign In</h1>
        </div>
        <div className="flex flex-row gap-2">
          <ShoppingCartOutlinedIcon />
          <h1>Cart</h1>
        </div>
        <div className="flex flex-row gap-2">
          <FavoriteBorderOutlinedIcon />
          <h1>Wishlist</h1>
        </div>
      </div>
    </nav>
  );
}
