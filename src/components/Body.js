import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
  const isSideBarView = useSelector(store => store.config.isSideBarView);
  return (
    <div className='flex'>
        <div className=''>
          {isSideBarView && <Sidebar />}
        </div>
        <div className=''>
          <Outlet />
        </div>
        
    </div>
  )
}

export default Body