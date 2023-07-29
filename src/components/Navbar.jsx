import React, { useState } from 'react';
import { navLinks } from '../constants';
import { FiHome, FiSearch, FiFolder, FiUser, FiCompass } from 'react-icons/fi'; // Import the required icons
import HomePlayer from './HomePlayer';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Home':
        return <FiHome className="w-6 h-6 " />;
      case 'Search':
        return <FiSearch className="w-6 h-6" />;
      case 'Folder':
        return <FiCompass className="w-6 h-6" />;
      case 'User':
        return <FiUser className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section>
      <HomePlayer />
    <nav className="z-[2] w-full py-4 px-4 bg-gray-800 text-white fixed bottom-0 left-0 border-t-[1px] border-secondary">
      <ul className="flex justify-between items-center">
        {navLinks.map((nav) => (
          <li key={nav.id}
            className={` mx-2 ${active === nav.title ? "text-white" : "text-secondary"} sm:mx-10 mx-5 flex flex-col items-center`} // Use 'flex flex-col items-center' to center the icon and text vertically and place text under the image
            onClick={() => {
              setToggle(!toggle);
              setActive(nav.title);
            }}>

            {nav.image && getIconComponent(nav.image)} {/* Render the corresponding icon */}
            <a href={`#${nav.id}`} className="text-white hover:text-gray-300 mt-1  font-bold font-poppins sm:text-l text-[8px] ">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </section>
  );
};

export default Navbar;
