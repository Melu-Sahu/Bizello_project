import React, { useState } from 'react';

const Button = ({ btnText, className }) => {

  const [hovered, setHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY >= 125) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
  window.addEventListener('scroll', scrollEvent);


  return (
    <button className={`${className}
    ${(hovered) ? 'text-white bg-black' : 'text-violet-500 bg-white'}
    transition-all delay-50 rounded-3xl w-40 h-10 cursor-pointer`}
      onMouseEnter={() => { setHovered(true) }}
      onMouseLeave={() => { setHovered(false) }}
    >
      {btnText}
    </button>
  )
}

export default Button
