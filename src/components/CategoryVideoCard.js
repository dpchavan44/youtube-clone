import React from 'react'
import { Link } from 'react-router-dom';

const CategoryVideoCard = ({video}) => {
  //console.log(videos)
  const {snippet} = video;
  const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='py-2 md:py-0 md:p-2 md:m-2 md:w-80 text-white md:text-black'>
        <Link to={"/watch?v="+video?.id?.videoId}><img className='w-screen md:rounded-2xl duration-0 hover:duration-700 hover:rounded-none' alt="video-poster" src={thumbnails.medium.url}></img></Link>
        <h1 className='pl-2 line-clamp-2 w-80 font-serif md:font-sans font-bold md:font-semibold'>{title}</h1>
        <h1 className='pl-2 line-clamp-2 w-80 font-normal'>{channelTitle}</h1>
    </div>
  )
}

export default CategoryVideoCard