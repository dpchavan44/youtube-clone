import React, { useEffect } from 'react'
import { getVideoCommentsByID } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from '../utils/videoCategoriesSlice';
import CommentCard from './CommentCard';

const Comments = ({videoId}) => {
  //console.log("Rendering ...");
  const dispatch = useDispatch();
  const comments = useSelector(store => store.videocategories?.comments);
  //console.log(videoId);
  //console.log(comments);
  const readComments = async () => {
    const data = await fetch(getVideoCommentsByID(videoId));
    const results = await data.json();
    //console.log(results);
    dispatch(addComments(results.items))
  }
  useEffect(()=>{
     readComments();
  },[videoId])
  return (
    <div className='hidden md:inline-block'>
        <span className='m-4 py-6 font-bold text-2xl'>Comments</span>
        {comments?.map(comment => <CommentCard key={comment.id} comment={comment}/>)}
        
    </div>
  )
}

export default Comments