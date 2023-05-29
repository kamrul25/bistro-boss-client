import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Contact Us </NavLink>
      </li>
      <li>
        <NavLink>Dashboard </NavLink>
      </li>
      <li>
        <NavLink to="menu">Our Menu </NavLink>
      </li>
      <li>
        <NavLink to="ordered/salad">Our Ordered </NavLink>
      </li>
      <li>
        <NavLink>Sign In </NavLink>
      </li>
      <li>
        <NavLink><FaShoppingCart  className="text-green-500"/> </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-6xl fixed z-10 bg-black bg-opacity-30 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link to="/" className="tex-white">
          <h1>BISTRO BOOS</h1>
          <p>R E S T A U R A N T</p>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className=" hidden lg:flex justify-between items-center gap-3 text-white px-1">{nav}</ul>
      </div>
      <div className="navbar-end block lg:hidden ">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
