import React, { useEffect } from 'react'
import { addShorts } from '../utils/videoCategoriesSlice';
import { YOUTUBE_SHORT_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import ShortCard from './ShortCard';

const ShortView = () => {
    const dispatch = useDispatch();
    const getShorts = async () => {
        const data = await fetch(YOUTUBE_SHORT_API);
        const results = await data.json();
        //console.log(results);
        //Adding result into video catageries so video gets displyed into video container
        dispatch(addShorts(results));
    }
    console.log("ShortView");
    useEffect(() => {
        getShorts();
    },[])
    return (
        <div className=''>
            <ShortCard />
        </div>
    )
}

export default ShortView