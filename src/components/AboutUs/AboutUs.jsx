import React from 'react';
import Image from '../../assets/Man.jpg'
import AboutDescriptions from './AboutDescriptions';
import Button from '../Button/Button';

const AboutUs = () => {
    return (
        <div id='about' className='p-10 w-full lg:flex lg:justify-center sm:block'>

            <img src={Image} className='lg:w-[500px] h-[130vh] sm:w-full rounded-br-[35px] rounded-tr-[35px] rounded-bl-[35px] ' />

            <div className='lg:w-1/2 sm:w-full lg:my-3 sm:my-12  ms-7'>
                <h1 className='text-violet-800 my-3 font-bold h1'>WHY CHOOSE US</h1>
                <h1 className='font-black  text-gray-700 lg:text-5xl sm:text-[44px] xs:text-base'>We Are Executive<br></br>
                    Solution Agency</h1>

                <h2 className='my-5 lg:text-2xl  sm:text-sm'>We're Bulding Modern and High Software For Your Startup Business</h2>

                <AboutDescriptions className='' titleText={'Unique UX/UI Design'} icon = "rocket"
                 descriptionText={'Lorem ipsum dolor Ea consequatur, omnis vitae cupiditate nihil dolorum? For Your Startup'} />

                <AboutDescriptions className='' titleText={'Theme Development'} icon = "theme"
                 descriptionText={'Lorem ipsum dolor Ea consequatur, omnis vitae cupiditate nihil dolorum? For Your Startup'} />

                <AboutDescriptions className='' titleText={'Digital Marketing'} icon = "add"
                 descriptionText={'Lorem ipsum dolor Ea consequatur, omnis vitae cupiditate nihil dolorum? For Your Startup'} />

                 <Button btnText={'Get Started'} className='my-5 ' />

            </div>


        </div>
    )
}

export default AboutUs
