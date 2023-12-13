import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const FAQCard = ({ question, answer }) => {
    const [isAnswerAppear, setIsAnswerAppear] = useState(false);

    const toggleAnswerVisible = () => {
        setIsAnswerAppear(!isAnswerAppear);
    };

    return (
        <div className='my-3 flex flex-col flex-wrap overflow-auto shadow-lg '>
            <div className='question-bar h-12 flex justify-between items-center p-2 bg-gray-100 shadow-md' onClick={toggleAnswerVisible}>
                <h1 className='lg:font-semibold sm:font-normal sm:text-sm lg:text-lg m-1'>{question}</h1>
                {
                    (isAnswerAppear) ? <IoIosArrowUp /> : <IoIosArrowDown />
                }
            </div>
            {isAnswerAppear && (
                <div className="answer p-2 bg-white">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    )
}

export default FAQCard
