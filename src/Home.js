import React from 'react';
import Search from './Search';
import { MovieList } from './MovieList';
import { useGlobalContext } from './context';
import Error from './Error';


const Home = () => {
  const { movies,isError } = useGlobalContext();

  return (
    <>
      <div className="pb-5" style={{ backgroundColor: "#545353" }}>
        <Search />
        {!isError.showError ? <MovieList />:<Error />}
      </div>
    </>
  )
}

export default Home