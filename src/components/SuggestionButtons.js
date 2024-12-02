import React from 'react'
import { API_CONST_STRING, YOUTUBE_V_CAT } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addVideoCategories, clearVideoCategories } from '../utils/videoCategoriesSlice';

const SuggestionButtons = () => {
  const dispatch = useDispatch();
  const buttonsSuggestions = [ { key : 0, value : 'All'},
                               { key : 17, value : 'Sports'},
                               { key : 19, value :  'Travel & Events'},
                               { key : 23, value : 'Comedy'},
                               { key : 25, value : 'News & Politics'},
                               { key : 27, value : 'Education'},
                               { key : 28, value : 'Science & Technology'}
                             ];
  //console.log(buttonsSuggestions);
  const handleCategoryVideo = async (key) => {
    if(key == 0){
      dispatch(clearVideoCategories());
    }else {
      const data = await fetch(YOUTUBE_V_CAT+key+API_CONST_STRING);
      const results = await data.json();
      //console.log(results);
      dispatch(addVideoCategories(results));
    }
  }
  return (
    <div className='bg-black md:bg-white sticky top-16'>
        <ul className='flex'>
            {buttonsSuggestions.map(button => <li key={button.key} className='line-clamp-1 md:line-clamp-none m-1 py-1 px-2 w-full md:w-auto md:p-2 md:px-4 mx-2 bg-gray-300 rounded-2xl cursor-pointer' onClick={() => handleCategoryVideo(button.key)}>{button.value}</li>)}
        </ul>
    </div>
  )
}

export default SuggestionButtons