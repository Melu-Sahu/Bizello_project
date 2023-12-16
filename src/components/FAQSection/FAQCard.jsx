import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const FAQCard = ({ question, answer }) => {
    const [isAnswerAppear, setIsAnswerAppear] = useState(false);

    const toggleAnswerVisible = () => {
        setIsAnswerAppear(!isAnswerAppear);
    };

    return (
        <div className='my-3 flex flex-col flex-wrap shadow-lg '>
            <div className='question-bar flex justify-between items-center p-2 z-10 bg-gray-100 shadow-md rounded-md' onClick={toggleAnswerVisible}>
                <h1 className='lg:font-semibold sm:font-normal sm:text-sm lg:text-md m-1 '>{question}</h1>
                {
                    (isAnswerAppear) ? <IoIosArrowUp /> : <IoIosArrowDown />
                }
            </div>
            {isAnswerAppear && (
                <div className="answer p-2 mt-[-5px] rounded-sm bg-white">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    )
}

export default FAQCard
