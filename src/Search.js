import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const { searchQuery, setSearchQuery } = useGlobalContext();
  return (
    <>
      <div className='text-center pt-5'>
        <h5 className='text-white search'>Search your favourite movie</h5>
        <input type='text' placeholder='Search movie here...' className='searchBar w-50' onChange={(e)=>setSearchQuery(e.target.value) } value={searchQuery} />
      </div>
    </>
  )
}

export default Search;