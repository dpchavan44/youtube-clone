import React, { useEffect, useState } from 'react'
import { HUMBURGER,YOUTUBE_AUTO_COMPLETE_API,YOUTUBE_LOGO, getYoutubeApiPageWise, getYoutubeStringSearchAPI } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSidebarState, cachedSuggestions } from '../utils/configSlice'
import { addVideoCategories, clearVideoCategories } from '../utils/videoCategoriesSlice'
const Header = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  const [showSuggestionView, setShowSuggestionView] = useState(false);
  const [suggestions, setSuggestiosn] = useState([]);
  const [pageToken,setNextPageToken] = useState(null);
  const cachedData = useSelector(store => store.config.cachedData);
  const categoriesVideos = useSelector(store => store.videocategories.videoCategories);
 
  const handleSideBarView = () => {
     dispatch(addSidebarState());
  }
  const getSuggestions = async () => {
    const result = await fetch(YOUTUBE_AUTO_COMPLETE_API+searchString);
    const suggestions = await result.json();
    //console.log(suggestions[1]);
    setSuggestiosn(suggestions[1]);
    //console.log(searchString+" "+suggestions[1]);
    dispatch(cachedSuggestions({
      [searchString] : suggestions[1]
    }))
  }
  const handleSearchString = async (suggestion) => {
     //console.log("Suggestion :" + suggestion);
     setShowSuggestionView(false);
     setSearchString(suggestion);
     if(suggestion){
        const data = await fetch(getYoutubeStringSearchAPI(suggestion));
        const results = await data.json();
        //console.log(results);
        //Adding result into video catageries so video gets displyed into video container
        dispatch(addVideoCategories(results));
        setNextPageToken(results.nextPageToken);
     } else {
        //otherwise show all type vdieos
        dispatch(clearVideoCategories());
     }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //console.log(searchString);
      handleSearchString(searchString);
    }
  }//TODO 
  const handleScroll = async () => {
    //console.log(pageToken);
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight)
        return;
    if(searchString && pageToken) {
      const data = await fetch(getYoutubeApiPageWise(pageToken,searchString));
      const results = await data.json();
      //console.log(results);
    }
  }
  useEffect( () => {
    let timer ;
    //here we are checking if search string present then only call API

      //seting debouncing timer as 200ms (interval between two key press is less than 200ms then no need to call api
      //When ever the searchString get change then re concialation happens means re render components
       
    timer = setTimeout(()=> {
      //console.log("API gets called : " + searchString)
      //check if search string present in cached data
      if(cachedData && cachedData[searchString]){
         //console.log(cachedData[searchString]);
         setSuggestiosn(cachedData[searchString]);
      } else {
        searchString && getSuggestions();
      }
    },200)
    window.addEventListener("scroll", handleScroll);
    //here this function get called before un mounting the componet
    //if unmoount happen before 200ms then above registered timer will get expire and API call get decline
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll)
    }
  },[searchString])
  return (
    <>
    <div className='bg-black md:bg-white grid grid-flow-col shadow-sm md:p-2 md:m-2 justify-between sticky top-0'>
        <div className='flex col-span-1'>
            <img className='hidden md:inline-block h-12 cursor-pointer' alt="humburger" src={HUMBURGER} onClick={handleSideBarView}/>
            <a href='/'><img className='hidden md:inline-block p-2 h-12 w-auto md:w-full rounded-full md:rounded-none' alt="youtube-logo" src={YOUTUBE_LOGO}/></a>
            {/*<div className='md:hidden bg-white my-2 p-1'>
              <a href='/'><span className='text-white md:hidden bg-white'>🔙</span></a>
            </div>*/}
            <a href='/'><img className='rounded-full md:hidden inline-block h-14 w-16 p-2' alt="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1O-NIezepENfOj0i82HJdH_2-GeBgqFd5A&s"></img></a>
        </div>
        <div className='col-span-10 flex justify-center'>
            <input className='md:w-1/2 w-11/12 px-2 m-2 md:m-0 md:px-4 border-gray-200 border-2 rounded-r-full md:rounded-r-none rounded-l-full' 
               type="text" placeholder='Search' value={searchString} onChange={(e) => setSearchString(e.target.value)} 
               onFocus={() => setShowSuggestionView(true)} onKeyDown={(e) => handleKeyPress(e)}></input>
            <button className='hidden md:inline-block bg-gray-200 p-2 border-gray-200 border-2 rounded-r-full' onClick={() => handleSearchString(searchString)}>🔍</button>
        </div>
        <div className='hidden md:inline-block col-span-1'>
            <button className='bg-red-600 p-2 rounded-full'>👤</button>
        </div>
    </div>
    {searchString && showSuggestionView && suggestions && <div className='mx-20 md:mx-0 md:ml-[40rem] fixed bg-white rounded-lg w-4/12'>
      <ul>
        {suggestions.map(suggestion => <li key={suggestion} className='m-1 p-1 hover:bg-gray-100 font-semibold cursor-pointer' 
        onClick={() => handleSearchString(suggestion)} onBlur={() => setShowSuggestionView(false)}>⌕ {suggestion}</li>)}
      </ul>
    </div>}
    </>
  )
}

export default Header