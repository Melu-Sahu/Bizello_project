import React, { useState } from 'react';
import { BsRocket } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";


const AboutDescriptions = ({titleText, descriptionText, icon}) => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className='flex justify-start items-center mt-6'>
        <div className={` ${(hovered)?'to-purple-600 from-indigo-800':'from-purple-600 to-indigo-800'} rounded-[50%] bg-gradient-to-b  w-16 h-16 flex justify-center items-center`}
        onMouseEnter={()=>{setHovered(true)}}
        onMouseLeave={()=>{setHovered(false)}}
        >
            {
                (icon === 'rocket')?<BsRocket className='bold text-[35px] text-white' />:(icon==='theme')?<TfiGallery className='bold text-[35px] text-white' />:<AiOutlineVideoCameraAdd className='bold text-[35px] text-white' />
            }
        
        </div>
        <div className='px-6 w-3/4'>
            <h1 className='title font-bold'>{titleText}</h1>
            <p className='description font-thin'>{descriptionText}</p>
        </div>
    </div>
  )
}

export default AboutDescriptions
