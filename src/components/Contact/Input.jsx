import React from 'react';


const Input = ({ placeholder, id, name, type, onChange, value, icon }) => {
  return (

    <div className='flex w-fit justify-center items-center border-2 border-blue-300 m-5 '>
      <input
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        className='w-64 h-10 focus:outline-blue-400 outline-e-0 border-1 border-collapse px-4' />
      {
        icon
      }
    </div>
  )
}

export default Input
