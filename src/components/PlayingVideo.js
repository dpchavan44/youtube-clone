import React from 'react'

const PlayingVideo = ({videoId,width,height}) => {
  return (
    <div className='rounded-lg'>
        <iframe className='rounded-2xl'
        width={width}
        height={height}
        src={"https://www.youtube.com/embed/"+videoId+"?autoplay=1&mute=0"} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
    </div>
  )
}

export default PlayingVideo