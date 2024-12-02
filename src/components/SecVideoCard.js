import React from 'react'
import { Link } from 'react-router-dom';

const SecVideoCard = ({video}) => {
  //console.log(video); 
  const {snippet} = video;
  const {channelTitle,description,thumbnails} = snippet;
  let videoId = video?.id?.videoId || video.id;
  //console.log(snippet);
  return (
    <Link to={"/watch?v="+videoId}>
      <div className='bg-black md:bg-white text-white md:text-black m-2 md:m-0 md:flex md:pl-2 md:pt-2 md:w-[34rem] md:border-gray-200 md:border-b-2 overflow-y-auto'>
        <div className='md:w-3/12'>
            <img className="w-screen rounded-lg" alt='poster' src={thumbnails.medium.url}/>
        </div>
        <div className='p-1 px-2 mx-2 md:w-9/12'>
            <h1 className='font-bold from-neutral-600 line-clamp-2'>{description}</h1>
            <span className='font-normal'>{channelTitle}</span>
        </div>
      </div>
    </Link>
  )
}

export default SecVideoCard