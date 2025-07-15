import React from 'react';

const Rightbar = () => {
  return (
    <div className="sticky top-0 h-screen md:w-auto w-full overflow-y-auto scrollbar-hidden ">
      <div className="p-5">
        {/* Suggestions For You */}
        <div className="shadow-xl rounded-xl p-5 mb-5 bg-white">
          <span className="text-gray-500">Suggestions For You</span>
          
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between my-3">
            <div className="flex items-center gap-2 relative">
              <img
                src="/photos/tired.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">
                Coffee Addict
              </span>
            </div>
            <div className="flex gap-2 mt-2 xl:mt-0">
              <button className="px-3 py-1 text-white bg-[#034a9c] hover:bg-[#022f73] rounded-xl">Follow</button>
              <button className="px-3 py-1 text-white bg-red-600 hover:bg-[#a00404] rounded-xl">Dismiss</button>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between my-3">
            <div className="flex items-center gap-2 relative">
              <img
                src="/photos/bird.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">
                Birdy Gideon
              </span>
            </div>
            <div className="flex gap-2 mt-2 xl:mt-0">
              <button className="px-3 py-1 text-white bg-[#034a9c] hover:bg-[#022f73] rounded-xl">Follow</button>
              <button className="px-3 py-1 text-white bg-red-600 hover:bg-[#a00404] rounded-xl">Dismiss</button>
            </div>
          </div>

        </div>


{/* Latest Activities */}
<div className="shadow-xl rounded-xl p-5 mb-5 bg-white">
  <span className="text-gray-500">Latest Activities</span>

  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between my-3">
    <div className="flex items-center gap-2 relative">
      <img
        src="/photos/sugar.jpg"
        alt="User"
        className="w-10 h-10 rounded-full object-cover cursor-pointer"
      />
      <p className="">
        <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Sugar Cubes </span> 
        <span className='text-gray-500'>made a post</span>
      </p>
    </div>
    <span className="text-gray-500 mt-2 xl:mt-0">22 mins ago</span>
  </div>

  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between my-3">
    <div className="flex items-center gap-2 relative">
      <img
        src="/photos/sugar.jpg"
        alt="User"
        className="w-10 h-10 rounded-full object-cover cursor-pointer"
      />
      <p className="">
        <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Sugar Cubes </span> 
        <span className='text-gray-500'>liked a post</span>
      </p>
    </div>
    <span className="text-gray-500 mt-2 xl:mt-0">37 mins ago</span>
  </div>

  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between my-3">
    <div className="flex items-center gap-2 relative">
      <img
        src="/photos/hello.jpg"
        alt="User"
        className="w-10 h-10 rounded-full object-cover cursor-pointer"
      />
      <p className="">
        <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Hello You </span> 
        <span className='text-gray-500'>liked a post</span>
      </p>
    </div>
    <span className="text-gray-500 mt-2 xl:mt-0">54 mins ago</span>
  </div>

  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between my-3">
    <div className="flex items-center gap-2 relative">
      <img
        src="/photos/rasp.jpeg"
        alt="User"
        className="w-10 h-10 rounded-full object-cover cursor-pointer"
      />
      <p className="">
        <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Ice Cream </span> 
        <span className='text-gray-500'>made a comment</span>
      </p>
    </div>
    <span className="text-gray-500 mt-2 xl:mt-0">1 hour ago</span>
  </div>

</div>

        {/* Online Friends */}
        <div className="shadow-xl rounded-xl p-5 mb-5 bg-white">
          <span className="text-gray-500">Online Friends</span>
          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-2 relative">
              <img
                src="/photos/batman.png"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-0 left-7 w-3 h-3 rounded-full bg-lime-500" />
              <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Bat Man</span>
            </div>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-2 relative">
              <img
                src="/photos/puffpuff.png"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-0 left-7 w-3 h-3 rounded-full bg-lime-500" />
              <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Puff Puff</span>
            </div>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-2 relative">
              <img
                src="/photos/sugar.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-0 left-7 w-3 h-3 rounded-full bg-lime-500" />
              <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Sugar Cubes</span>
            </div>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-2 relative">
              <img
                src="/photos/rasp.jpeg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-0 left-7 w-3 h-3 rounded-full bg-lime-500" />
              <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Ice Cream</span>
            </div>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-2 relative">
              <img
                src="/photos/hello.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-0 left-7 w-3 h-3 rounded-full bg-lime-500" />
              <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Hello You</span>
            </div>
          </div>

          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-2 relative">
              <img
                src="/photos/cupcake.jpeg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-0 left-7 w-3 h-3 rounded-full bg-lime-500" />
              <span className="font-medium text-black dark:text-white cursor-pointer hover:text-gray-500">Pink Icing</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
