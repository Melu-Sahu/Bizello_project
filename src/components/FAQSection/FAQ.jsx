import React from 'react';
import FAQImg from '../../assets/faqs.png';
import FAQCard from './FAQCard';

const FAQ = () => {
    const questionAnswers = [
        {
            qn: 1,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laborum ?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem eaque velit sapiente! Saepe esse vel veritatis optio nesciunt quas.'
        },
        {
            qn: 2,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing ?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem eaque velit sapiente! Saepe esse vel veritatis optio nesciunt quas.'
        },
        {
            qn: 3,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laborum ?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem eaque velit sapiente! Saepe esse vel veritatis optio nesciunt quas.'
        },
        {
            qn: 4,
            question: 'Lorem ipsum dolor sit amet consecing elit. Odio, laborum ?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem eaque velit sapiente! Saepe esse vel veritatis optio nesciunt quas.'
        },
        {
            qn: 5,
            question: 'Lorem ipsum dolor sit amet consectelaborum ?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem eaque velit sapiente! Saepe esse vel veritatis optio nesciunt quas.'
        },
        {
            qn: 6,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicit. Odio, laborum ?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem eaque velit sapiente! Saepe esse vel veritatis optio nesciunt quas.'
        }
    ]

    return (
        <div className='w-full h-[135vh] bg-gray-200 p-10  mt-5' id='faq'>
            <h1 className='text-indigo-700 text-center my-3 font-semibold'>FAQ</h1>
            <h1 className='text-gray-700 font-black lg:text-5xl sm:text-lg text-center'>Frequently Asked</h1>
            <div className='lg:flex sm:block justify-center items-center'>

                <img className='lg:w-1/2 sm:-full p-6 ' src={FAQImg} alt='Frequently Asked Questions' />

                <div className='lg:w-1/2 sm:-full p-6 '>

                    {
                        questionAnswers.map((qna) => (
                            <FAQCard key={qna.qn} question={qna.question} answer={qna.answer} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default FAQ
