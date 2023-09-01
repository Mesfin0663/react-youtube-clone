import React, { useContext, useEffect, useState } from 'react'
import fetchFromApi from '../../config/fetchApi'
import "./videos.css"
import moment from 'moment';

import 'moment-duration-format';
import { CircularProgress, LinearProgress } from '@mui/material';
import VideoCard from '../video_card/VideoCard';
import { TitleContext } from '../../context/TitleContext';

function Videos() {
    const [movieList, setMovieList] = useState()
  const [loading, setLoading] = useState(true)
  // const[title,setTitle] = useState("Music");
  const {title,setTitle} = useContext(TitleContext)
  useEffect(() => {
    setLoading(true)
    formatISODate("PT4M55S")
  //  console.log(moment.utc(formatISODate("PT4M55S")*1000).format('HH:mm:ss'));
    fetchFromApi(title.toLowerCase()).then((response) => {
      console.log(response.data.items);
      setMovieList(response.data.items);
      setLoading(false)
    }).catch(err => {
      console.log(err)
      // setLoading(false)
    })
  }, [title])

  function formatISODate(youtubeDuration){
    
let duration = moment.duration('PT4M55S')
console.log(moment.utc(duration.asMilliseconds()).format("HH:mm:ss"))
// return s;

  }

    
  return (
    <div className='videos_container'>
       {
        loading ? <div className='vidoe_progress_indicator'>
          <LinearProgress color="secondary"/>
        </div> : <>
          <h1 className='video_top_title'>Music Video</h1>
        <div className='video_wrapper'>
        {
            movieList.map((movie) => (
              // <div className='video_card'>
              //                   <img className='video_image' src={movie.snippet.thumbnails.medium.url} alt="" />

              //   <h1 className='video_title'>{movie.snippet.title}</h1>
              //   <p className='video_description'>{movie.snippet.description}</p>
              //   {/* <iframe height="480" width="500"
              //     src={`https://www.youtube.com/embed/${movie.id.videoId}`}>
              //   </iframe> */}
              // </div>
              <VideoCard key={movie.id.videoId} id={movie.id.videoId} imgUrl={movie.snippet.thumbnails.medium.url} title={movie.snippet.title} description={movie.snippet.description}/>

            ))
          }
        </div>
        </>
      }

    </div>
  )
}

export default Videos
