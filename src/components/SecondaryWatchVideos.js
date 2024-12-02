import React from 'react'
import { useSelector } from 'react-redux'
import SecVideoCard from './SecVideoCard';

const SecondaryWatchVideos = () => {
  let videos = useSelector(store => store.videocategories?.videoCategories);
  const popularVideos = useSelector(store => store.popularvideos?.popularVideos);
  //console.log(videos.items)
  videos = videos ? videos : popularVideos;
  if(!videos) return;
  return (
    <div className='md:border md:border-blue-950 md:rounded-xl'>
        {videos.items.map(video => <SecVideoCard video={video}/>)}
    </div>
  )
}

export default SecondaryWatchVideos