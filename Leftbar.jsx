import React from 'react';
import { Link } from 'react-router-dom';

const Leftbar = () => {
  return (
    <div className="shadow-xl rounded-b-xl sticky top-0 xl:h-screen md:w-auto w-full overflow-y-auto scrollbar-hidden">
      <div className="space-y-3 p-5">
        {/* Left bar content */}
        <div className="flex items-center space-x-2">
          <Link to='profile/:id'>
            <img src="/photos/cake.jpg" alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
          </Link>
          <Link to='profile/:id'>
            <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Astra Quanta</span>
          </Link>
        </div>

        {/* Other items */}
        <div className="flex items-center space-x-2">
          <img src="/photos/friends.png" alt="Friends" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300 ">Friends</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/group.png" alt="Group" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Groups</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/messages.png" alt="Messages" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Messages</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/gallery.png" alt="Gallery" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Gallery</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/videos.png" alt="Videos" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Videos</span>
        </div>
        <div className="border-t-2 border-t-gray-200 dark:border-t-gray-700 text-xs text-black dark:text-white">
          <div className="mt-2 mb-2">Resources</div>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/books.png" alt="Books" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Books</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/quotes.png" alt="Quotes" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Quotes</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/music.png" alt="Music" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Music</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/youtube.png" alt="Clips" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Clips</span>
        </div>
        <div className="border-t-2 border-t-gray-200 dark:border-t-gray-700 text-xs text-black dark:text-white">
          <div className="mt-2 mb-2">Others</div>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/funds.png" alt="Fundraiser" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Fundraiser</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/market.png" alt="Marketplace" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Marketplace</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/photos/courses.png" alt="Courses" className="w-8 h-8 rounded-full cursor-pointer" />
          <span className="hidden md:inline text-sm text-black dark:text-white cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Courses</span>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
