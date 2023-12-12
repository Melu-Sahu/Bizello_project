import React from 'react';
import './ServiceCard.css';
import { BsRocketFill  } from "react-icons/bs";
import { TiDeviceDesktop } from "react-icons/ti";
import { GiHeadphones } from "react-icons/gi";
import { MdMobileFriendly } from "react-icons/md";

const ServiceCard = ({icon, title, description}) => {
  return (
    <div className='w-72 h-64 m-10 rounded-2xl flex flex-col justify-start items-center p-5' id='card'>
        {
            (icon==='desktop')?<TiDeviceDesktop className='text-5xl text-violet-700' />:(icon==='mobile')?<MdMobileFriendly className='text-5xl text-violet-700' />:(icon === 'rocket')?<BsRocketFill className='text-5xl text-violet-700' />:<GiHeadphones className='text-5xl text-violet-700' />
        }
        <h1 className='font-medium text-xl  my-3 '>{title}</h1>
        <p>{description}</p>
      
    </div>
  )
}

export default ServiceCard
