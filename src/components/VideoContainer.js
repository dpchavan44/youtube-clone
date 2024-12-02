import React, { useEffect } from 'react'
import { YOUTUBE_POPULAR_VID_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularVideos } from '../utils/popularVideosSlice';
import VideoCard from './VideoCard';
import CategoryVideoCard from './CategoryVideoCard';

const VideoContainer = () => {
    const popularVideos = useSelector(store => store.popularvideos.popularVideos);
    const categoriesVideos = useSelector(store => store.videocategories.videoCategories)
    const dispatch = useDispatch();
    const handleScrool = () => {
        console.log("Handle scrool");
    }
    const getMostPopularVideos = async () => {
        const data = await fetch(YOUTUBE_POPULAR_VID_API);
        const results = await data.json()
        //console.log(results);
        dispatch(addPopularVideos(results));
    }

    useEffect(() => {
        !popularVideos && getMostPopularVideos()
    },[]);
    return (
        <div className='flex-row md:flex md:flex-wrap bg-black md:bg-white' onScroll={handleScrool}>
            {categoriesVideos ? categoriesVideos?.items.map(item => <CategoryVideoCard key={item?.id?.videoId} video={item}/>) : 
             popularVideos?.items.map(item => <VideoCard key={item?.id} video={item}/>)}
        </div>
    )
}

export default VideoContainer