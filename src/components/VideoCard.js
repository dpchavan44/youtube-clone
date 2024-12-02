import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({video}) => {
  //console.log(videos)
  const {statistics,snippet} = video;
  const {viewCount} = statistics;
  const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='py-2 md:p-2 md:m-2 md:w-80 text-white md:text-black'>
        <Link to={"/watch?v="+video.id}><img className='w-screen md:rounded-2xl duration-0 hover:duration-700 hover:rounded-none' alt="video-poster" src={thumbnails.medium.url}></img></Link>
        <h1 className='pl-2 line-clamp-2 w-80 font-semibold'>{title}</h1>
        <h1 className='pl-2 line-clamp-2 w-80 font-normal'>{channelTitle}</h1>
        <span className='pl-2'>{viewCount} views</span>
    </div>
  )
}

export default VideoCard