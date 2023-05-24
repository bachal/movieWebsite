import React, { useContext } from 'react';
import { useGlobalContext } from './context';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Loader from './common/Loader';

export const MovieList = () => {
  const { movies, isLoading } = useGlobalContext();

  return (
    <>
      <div className="container-fluid d-flex justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#545353" }}>
        {/* <div className='row' style={{width:"80%"}} >
          {
        !isLoading ?  movies.map((currMovie, index) => {
              const { Title, Poster, imdbID } = currMovie
              return (
                Poster !== "N/A" ?
                  <div className='col-12 col-md-4 col-lg-3 d-flex align-items-stretch justify-content-center zoom' >
                    <Link to={`movie/${imdbID}`} className="text-dark" style={{textDecoration: 'none'}}><Card className="mt-4 shadow-lg rounded border border-dark p-3 text-center" >
                      
                        <Card.Img variant="top" src={Poster} style={{ height: "200px" ,width:"200px"}}/>
                        <Card.Body className='d-flex flex-column align-items-center '>
                        </Card.Body>
                      <h5 className='titlestyle'>{Title.length>20?Title.slice(0,20)+'...':Title}</h5>
                    </Card></Link>
                  </div> : '')
            }):<div className='mt-5'><Loader /></div>
          }
        </div> */}
        <div className='d-flex justify-content-center flex-wrap gap-5'>
          {!isLoading ? movies.map((currMovie, index) => {
            const { Title, Poster, imdbID } = currMovie
            return (
              Poster !== "N/A" ?
                <Link to={`movie/${imdbID}`} className="text-dark" style={{ textDecoration: 'none' }}><div className='ml-3'><Card className="mt-4 w-100 shadow-lg rounded border border-dark p-3 text-center pr-3" >
                  <Card.Img variant="top" src={Poster} style={{ height: "200px", width: "200px" }} />
                  <Card.Body className='d-flex flex-column align-items-center '>
                  </Card.Body>
                  <h5 className='titlestyle'>{Title.length > 20 ? Title.slice(0, 20) + '...' : Title}</h5>
                </Card></div></Link>
                : '')
          }) : <div className='mt-5'><Loader /></div>}
        </div>
      </div>

    </>
  )
}
