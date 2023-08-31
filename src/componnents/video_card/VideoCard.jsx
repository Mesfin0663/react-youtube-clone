import React from 'react'

function VideoCard({imgUrl,title,description,key}) {
    console.log("video Id",key)
    return (
        <div className='video_card'>
            <img className='video_image' src={imgUrl} alt="" />

            <h1 className='video_title'>{title}</h1>
            <p className='video_description'>{description}</p>
            {/* <iframe height="480" width="500"
src={`https://www.youtube.com/embed/${movie.id.videoId}`}>
</iframe> */}
        </div>
    )
}

export default VideoCard
