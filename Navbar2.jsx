import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineHome } from "react-icons/md";
import { IoMoonOutline, IoSunnyOutline, IoClose } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const toggleOthersMenu = () => {
    setIsOthersOpen(!isOthersOpen);
  };

  return (
    <div className="lg:hidden bg-white shadow-xl dark:bg-gray-900 text-black dark:text-white  flex justify-between items-center p-4 fixed bottom-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-4">
        {/* Toggling between FaBars and IoClose icons */}
        <div onClick={toggleMenu} >
          {isMenuOpen ? <IoClose size={24} className='hover:text-gray-500 dark:hover:text-gray-300'/> : <FaBars size={24} className='hover:text-gray-500 dark:hover:text-gray-300' />}
        </div>

        <Link to="/">
          <MdOutlineHome className='hover:text-gray-500 dark:hover:text-gray-300' size={24}  />
        </Link>

        {isDarkMode ? (
          <IoSunnyOutline className='hover:text-gray-500 dark:hover:text-gray-300' size={24}  onClick={toggleTheme} />
        ) : (
          <IoMoonOutline className='hover:text-gray-500 dark:hover:text-gray-300' size={24}  onClick={toggleTheme} />
        )}
        <BsGrid className='hover:text-gray-500 dark:hover:text-gray-300' size={24}  />
      </div>

      <div className="flex items-center space-x-2">
        <Link to="profile/:id">
          <img
            src="/photos/cake.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </Link>
        <Link to="profile/:id">
          <span className="hover:text-gray-500 dark:hover:text-gray-300">Astra Quanta</span>
        </Link>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute bottom-16 left-4 right-4 bg-white w-[230px] dark:bg-gray-800 shadow-xl rounded-xl p-4 z-40">
          <ul className="space-y-2">
            <li className="border-b-2 border-gray-500 pb-2">
              <div className="flex items-center space-x-2">
                <img src="/photos/friends.png" alt="Friends" className="w-8 h-8 rounded-full" />
                <span className=" text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Friends</span>
              </div>
            </li>

            <li className="border-b-2 border-gray-500 pb-2">
              <div className="flex items-center space-x-2">
                <img src="/photos/group.png" alt="Friends" className="w-8 h-8 rounded-full" />
                <span className=" text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Groups</span>
              </div>
            </li>

            <li className="border-b-2 border-gray-500 pb-2">
              <div className="flex items-center space-x-2">
                <img src="/photos/messages.png" alt="Friends" className="w-8 h-8 rounded-full" />
                <span className=" text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Messages</span>
              </div>
            </li>


            <li className="border-b-2 border-gray-500 pb-2">
              <div className="flex items-center space-x-2">
                <img src="/photos/gallery.png" alt="Friends" className="w-8 h-8 rounded-full" />
                <span className=" text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Gallery</span>
              </div>
            </li>

            <li className="border-b-2 border-gray-500 pb-2">
              <div className="flex items-center space-x-2">
                <img src="/photos/videos.png" alt="Friends" className="w-8 h-8 rounded-full" />
                <span className=" text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Videos</span>
              </div>
            </li>


            {/* Dropdown Menu: Resources Section */}
            <li className="border-b-2 border-gray-500 pb-2">
              <div
                className=" text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
                onClick={toggleResourcesMenu}
              >
                Resources...
              </div>
              {isResourcesOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li >
                    <div className="flex items-center space-x-2">
                      <img src="/photos/books.png" alt="Books" className="w-8 h-8 rounded-full" />
                      <span className="  text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Books</span>
                    </div>
                  </li>

                  <li >
                    <div className="flex items-center space-x-2">
                      <img src="/photos/quotes.png" alt="Books" className="w-8 h-8 rounded-full" />
                      <span className="  text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Quotes</span>
                    </div>
                  </li>

                  
                  <li >
                    <div className="flex items-center space-x-2">
                      <img src="/photos/music.png" alt="Books" className="w-8 h-8 rounded-full" />
                      <span className="  text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Music</span>
                    </div>
                  </li>

                  
                  <li >
                    <div className="flex items-center space-x-2">
                      <img src="/photos/youtube.png" alt="Books" className="w-8 h-8 rounded-full" />
                      <span className="  text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Clips</span>
                    </div>
                  </li>            
                </ul>
              )}
            </li>

              {/* Dropdown Menu: Others Section */}
              <li>
              <div
                className=" text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
                onClick={toggleOthersMenu}
              >
                Others...
              </div>
              {isOthersOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li >
                    <div className="flex items-center space-x-2">
                      <img src="/photos/funds.png" alt="Books" className="w-8 h-8 rounded-full" />
                      <span className="  text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Fundraiser</span>
                    </div>
                  </li>

                  <li >
                    <div className="flex items-center space-x-2">
                      <img src="/photos/market.png" alt="Books" className="w-8 h-8 rounded-full" />
                      <span className="  text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Marketplace</span>
                    </div>
                  </li>

                  
                  <li >
                    <div className="flex items-center space-x-2">
                      <img src="/photos/courses.png" alt="Books" className="w-8 h-8 rounded-full" />
                      <span className="  text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">Courses</span>
                    </div>
                  </li>
         
                </ul>
              )}
            </li>


          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
