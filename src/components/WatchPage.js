import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { json, useNavigate, useSearchParams } from 'react-router-dom'
import { closeSideBar } from '../utils/configSlice';
import PlayingVideo from './PlayingVideo';
import SecondaryWatchVideos from './SecondaryWatchVideos';
import Comments from './Comments';

const WatchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoriesVideos = useSelector(store => store.videocategories?.videoCategories);
  const popularVideos = useSelector(store => store.popularvideos?.popularVideos);
  console.log(categoriesVideos + " " +popularVideos);
  if( !categoriesVideos && !popularVideos){
    navigate("/");
  }
  useEffect(() => {
    dispatch(closeSideBar(true));
  },[])
  //Below is used to get all search params from query
  const [searcParams] = useSearchParams();
  let width = 1300;
  let height = 650; 
  if(window.innerWidth < 720){
    width = 426;
    height = 240;
  } else if (window.innerWidth > 720 && window.innerWidth <= 1280 ){
    width = 800;
    height = 400;
  }

  console.log("Inner width : "+window.innerWidth);
  //console.log(searcParams.get('v'))  //we need to read id which come with v=id
  const videoId=searcParams.get('v');
  console.log("Input ID :" + videoId);
  const item = categoriesVideos ? categoriesVideos?.items[0] : popularVideos?.items[0]; //TODO hard coded
  //console.log(item); 
  /*let newArray = item.filter(function (el) {
      return el.id.videoId == videoId;
    }
  );
  newArray.map(ele => console.log("Found :" + ele));
  console.log("Playing Info : "+ newArray);*/
  return (
    <div className='md:flex bg-black md:bg-white'>
      <div className='md:p-2 md:m-2 m-2 md:w-6/12 lg:w-8/12'>
        <PlayingVideo width={width} height={height} videoId={videoId}/>
        {/*<div>
          <span className='font-bold text-2xl'>{item?.snippet?.title}</span>
        </div>*/}
        <Comments videoId={videoId}/>
      </div>
      <div className='py-12 w-screen lg:p-2 md:mr-8 md:p-8 md:mx-auto md:w-6/12 lg:w-8/12 lg:ml-4 lg:mt-8 md:overflow-y-auto md:h-screen'>
        <SecondaryWatchVideos />
      </div>
    </div>

    
  )
}

export default WatchPage