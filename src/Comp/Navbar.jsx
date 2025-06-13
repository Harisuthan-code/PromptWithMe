import { useState } from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [openmenu, setOpenMenu] = useState(true);
  const [showMenuList, setShowMenuList] = useState(false);

  function showMenu() {
    setShowMenuList(true);
    setOpenMenu(false);
  }

  function closeMenu() {
    setShowMenuList(false);
    setOpenMenu(true);
  }

  return (
    <div className="text-white">
      <div className="flex w-full justify-between px-8 py-6 items-center">
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-semibold font-custom tracking-wider">Hari<span className="text-lg">-Portfolio Website</span></h1>
        </div>

        {/* Navbar Links for Desktop */}
        <div>
          <ul className="hidden lg:flex space-x-8 text-lg font-medium">
        
            
            <li className="hover:text-teal-600 transition duration-300">
             <Link to = "/Project"> <p>Projects</p></Link>
            </li>
          
          </ul>
        </div>

        {/* Menu for Mobile */}
        <div className="lg:hidden text-3xl">
          {openmenu ? (
            <i
              className="fa-solid fa-bars cursor-pointer hover:text-teal-400 transition duration-300"
              onClick={showMenu}
            ></i>
          ) : (
            <i
              className="fa-solid fa-xmark cursor-pointer hover:text-teal-400 transition duration-300"
              onClick={closeMenu}
            ></i>
          )}
        </div>
      </div>

      {/* Mobile Menu List */}
      {showMenuList && (
        <div className=" p-4 rounded-md shadow-lg">
          <ul className="flex flex-col space-y-5 text-xl font-medium ml-8 text-white">

            <li className="hover:text-teal-600 transition duration-300">
             <Link to = "/Project"> <p>Projects</p></Link>
            </li>
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
