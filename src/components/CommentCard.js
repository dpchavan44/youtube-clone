import React from 'react'

const CommentCard = ({comment}) => {
  //console.log(comment); 
  const {snippet,replies} = comment;
  const {topLevelComment} = snippet;
  //console.log(snippet);
  //console.log(replies);
  //console.log(topLevelComment);

  const UserComment = ({replie}) => {
    return (
        <div className='flex p-2 m-2'>
            <div className=''>
                <img className='rounded-full' alt="logo" src={replie?.snippet?.authorProfileImageUrl}></img>
            </div>
            <div className=''>
                <p>{replie?.snippet?.authorDisplayName}</p>
                <p>{replie?.snippet?.textOriginal}</p>
            </div>
        </div>
    )
  }

  return (
    <div className='flex p-2 m-2'>
        <div className=''>
            <img className='rounded-full' alt="logo" src={topLevelComment?.snippet?.authorProfileImageUrl}></img>
        </div>
        <div className=''>
            <p>{topLevelComment?.snippet?.authorDisplayName}</p>
            <p>{topLevelComment?.snippet?.textOriginal}</p>
            {replies?.comments.map(comment => <UserComment key={comment.id} replie={comment}/> )}
        </div>
    </div>
  )
}

export default CommentCard