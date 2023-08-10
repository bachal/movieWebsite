import React from 'react'
import { useGlobalContext } from './context';

const Error = () => {
  const { isError } = useGlobalContext();
  return (
    <>
      <div className="container-fluid d-flex justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#545353" }}>
        <div className='mt-5'>
          {isError.showError ? <>
            <div className='text-center mt-5'><img src="https://cdn.pixabay.com/photo/2020/12/19/02/50/emoji-5843434_1280.png" height="50px" width="50px" /></div>
            <div className='mt-1 fontStyle text-warning text-center'>{`Sorry, ${isError.msg}`}</div></> : ""}
        </div>
      </div>
    </>
  )
}

export default Error