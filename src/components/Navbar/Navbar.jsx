import React, { useState } from 'react';
import Button from '../Button/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState('home');

  const scrollEvent = () => {
    if (window.scrollY >= 125) {
      console.log('Scrolled.', window.scrollY);
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
  window.addEventListener('scroll', scrollEvent);

  const handleClick = (link)=>{
    setIsActive(link)
  }

  return (
    <nav className={` ${(isScrolled)?'bg-white': 'bg-transparent'} flex justify-center items-center w-full h-20 shadow-2xl fixed `}>
      <div className='logo flex justify-center items-center w-1/6'>
        <h1 className={` ${(isScrolled)?'text-black': 'text-white'} font-mono text-2xl`}><a href='#home'>BIZELLO</a></h1>
      </div>
      <div className='flex justify-evenly items-center w-4/6'>
        <span className={`${(isActive == 'home')?'text-gray-100':'text-gray-400'}`} onClick={()=>{handleClick('home')}} ><a href="#home">Home</a></span>
        <span className={`${(isActive == 'about')?'text-gray-100':'text-gray-400'}`} onClick={()=>{handleClick('about')}} ><a href="#about">About Us</a></span>
        <span className={`${(isActive == 'services')?'text-gray-100':'text-gray-400'}`} onClick={()=>{handleClick('services')}} ><a href="#services">Services</a></span>
        <span className={`${(isActive == 'howwork')?'text-gray-100':'text-gray-400'}`} onClick={()=>{handleClick('howwork')}} ><a href="#howwork">How it Works</a></span>
        <span className={`${(isActive == 'client')?'text-gray-100':'text-gray-400'}`} onClick={()=>{handleClick('client')}} ><a href="#client">Client</a></span>
        <span className={`${(isActive == 'price')?'text-gray-100':'text-gray-400'}`} onClick={()=>{handleClick('price')}} ><a href="#price">Price</a></span>
        <span className={`${(isActive == 'faq')?'text-gray-100':'text-gray-400'}`} onClick={()=>{handleClick('faq')}} ><a href="#faq">FAQ's</a></span>
      </div>
      <div className='flex justify-center items-center w-1/6'>
        <Button btnText={'Contact Us'} className={`${(isScrolled)?'bg-[#6610f2] text-white': "bg-white text-[#6610f2]"}`} />
      </div>
    </nav>
  )
}

export default Navbar
