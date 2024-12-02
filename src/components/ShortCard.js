import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const ShortCard = () => {
    let indexRef = useRef(0);
    const shorts = useSelector(store => store.videocategories.shorts);
    const [playIndex, setPlayIndex] = useState(0);
    const [y, setY] = useState(window.scrollY);
    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          if (y > window.scrollY) {
            if(indexRef.current > 0){
                indexRef.current = indexRef.current - 1;
            }
            setPlayIndex(indexRef.current);
          } else if (y < window.scrollY) {
            if(indexRef.current < 49){
                indexRef.current = indexRef.current + 1;
            }
            setPlayIndex(indexRef.current);
          }
          setY(window.scrollY);
        }, [y]
    );
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
      
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    if(!shorts) return;
    const shortArray = shorts?.items[playIndex];
    //console.log(shortArray);
    const {snippet} = shorts?.items?.[playIndex+1];
    const videoId = shortArray.id.videoId;
    const handlePreviousIndex = () => {
        if(indexRef.current > 0){
            indexRef.current = indexRef.current - 1;
        }
        setPlayIndex(indexRef.current);
    }
    const handleNextIndex = () => {
        if(indexRef.current < 49){
            indexRef.current = indexRef.current + 1;
        }
        setPlayIndex(indexRef.current);
    }
    
    
    console.log(playIndex + " " + indexRef.current);
    return (
        <div className='fixed top-24'>
            <div className='rounded-lg ml-[37rem] flex'>
                <iframe className='rounded-2xl'
                    width={400}
                    height={700}
                    src={"https://www.youtube.com/embed/"+videoId+"?autoplay=1&mute=0"} 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
                <div className='mt-72'>
                    <p className='p-1 my-2 py-4 ml-2 bg-slate-200 rounded-full font-bold' onClick={handlePreviousIndex}>Prev</p>
                    <p className='p-1 py-4 ml-2 bg-slate-200 rounded-full font-bold' onClick={handleNextIndex}>Next</p>
                </div>
            </div>
            <div className='ml-[37rem] py-4'>
                <img className='max-w-[83%] rounded-lg' alt="logo" src={snippet?.thumbnails?.high?.url}></img>
            </div>
        </div>
    )
}

export default ShortCard