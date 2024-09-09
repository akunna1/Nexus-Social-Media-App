import React from 'react';
import Upload from '../components/Upload';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <div className="p-3 text-black dark:text-white lg:ml-5">
      <Upload />
      <Posts />
    </div>
  );
};

export default Home;
