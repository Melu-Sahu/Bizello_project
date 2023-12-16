import React, { useState } from 'react';


const AchievementCard = ({ Icon, numbers, title }) => {
    const [hovered, setHovered] = useState(false);
    const [count, setCount] = useState(0);

    function counter(number) {
        let count =  0;
        let intervel_Id = setInterval(() => {
            if (count <= number) {
                setCount(count++);
            }else{
                clearInterval(intervel_Id);
            }
        }, 200);
        if(count<=number){
            
        }

    }
console.log(count);

    return (
        <div className='w-72 h-52 shadow-lg m-10 rounded-xl flex flex-col justify-start items-center pt-10 p-5 bg-white'>
            <div className={` ${(hovered) ? 'to-purple-600 from-indigo-800' : 'from-purple-600 to-indigo-800'} rounded-[50%] bg-gradient-to-b  w-16 h-16 flex justify-center items-center`}
                onMouseEnter={() => { setHovered(true) }}
                onMouseLeave={() => { setHovered(false) }}
            >
                {Icon}

            </div>
            <h1 className='font-bold text-3xl mt-4 text-gray-700'>{numbers}+</h1>
            <p className='mt-2 text-gray-400'>{title}</p>

        </div>
    )
}

export default AchievementCard
