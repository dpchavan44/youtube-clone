import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='hidden md:inline-block w-40 p-2 m-2 border-gray-300 border-r-2 border-opacity-30 sticky top-16 shadow-b'>
        <ul>
            <li className='py-1 my-1'><Link to="/">🏠︎ Home</Link></li>
            <li className='py-1 my-1'><Link to="/short">🎞️ Shorts</Link></li>
            <li className='py-1 my-1'>🔔Subscriptions</li>
        </ul>
        <div className='pt-2'>
            <div className='font-bold text-lg'>You</div>
            <ul>
                <li className='py-1 my-1'>🕙History</li>
                <li className='py-1 my-1'>၊၊||၊ Paylist</li>
                <li className='py-1 my-1'>🕙 Watch later</li>
                <li className='py-1 my-1'>👍 Liked videos</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar