import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { api_url } from './context.js';
import Moviedetail from './common/Moviedetail'
import Loader from "./common/Loader.js";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SingleMovie = () => {
  const [isLoding, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState("");
  const [isError, setIsError] = useState({ showError: false, msg: '' })
  const { id } = useParams();
  useEffect(() => {
    getMovie(`${api_url}&i=${id}`)
  }, [id])
  const getMovie = async (givenUrl) => {
    setIsLoading(true)
    try {
      const res = await fetch(givenUrl)
      const data = await res.json();
      if (data) {
        setMovieData(data);
        setIsError({ showError: false, msg: '' });
        setIsLoading(false);
      }
      else {
        setIsLoading(false);
        setIsError({ showError: true, msg: data.error });
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className="movieCard container-fluid">
        <div className="row">
          {movieData && (<div className="text-center fontStyle">Movie Detail</div>)}
        </div>
        {!isError.showError ?
          <div className="d-flex justify-content-center align-content-center">
            {movieData ? <div className="row col-10 col-md-6 bg-white p-3 border border-dark movieDetailCard">
              <div className="col-12 col-md-6 d-flex justify-content-center pr-2">
                <img src={movieData.Poster} width="100%" height="250px" />
              </div>
              <div className="col-12 col-md-6 d-flex align-content-between flex-wrap mt-2 mt-md-0">
                {movieData.Title && movieData.Title !== 'N/A' && (<Moviedetail detailType="Title" detail={movieData.Title} />)}
                {movieData.Released && movieData.Released !== 'N/A' && (<Moviedetail detailType="Released" detail={movieData.Released} />)}
                {movieData.imdbRating && movieData.imdbRating !== 'N/A' && (<Moviedetail detailType="IMDBRating" detail={movieData.imdbRating + '/10'} />)}
                {movieData.Country && movieData.Country !== 'N/A' && (<Moviedetail detailType="Country" detail={movieData.Country} />)}
                {movieData.Language && movieData.Language !== 'N/A' && (<Moviedetail detailType="Language" detail={movieData.Language} />)}
              </div>
            </div> : <Loader />}
          </div> : <div className="text-danger">{isError.msg}</div>}
        <div className="row  pb-md-0">
          {movieData && (<div className="text-center mt-2"><Link to={`/`}><Button variant="outline-dark" className="roundedButton">Back</Button></Link></div>)}
        </div>
      </div>
    </>
  )
}

export default SingleMovie;