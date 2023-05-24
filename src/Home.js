import React from 'react';
import Search from './Search';
import { MovieList } from './MovieList';

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#545353" }}>
        <Search />
        <MovieList />
      </div>
    </>
  )
}

export default Home