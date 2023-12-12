import React, { useState } from 'react';

const Button = ({ btnText, className }) => {

  const [hovered, setHovered] = useState(false);


  return (
    <button className={`${className}
    ${(hovered) ? ' bg-black text-white' : ' bg-gradient-to-r from-purple-600 to-indigo-800 text-white'}
    transition-all delay-50 rounded-3xl w-40 h-10 cursor-pointer shadow-lg`}
      onMouseEnter={() => { setHovered(true) }}
      onMouseLeave={() => { setHovered(false) }}
    >
      {btnText}
    </button>
  )
}

export default Button
