import React from 'react';
import Img1 from '../../assets/1.png'
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'
import WorkCard from './WorkCard';

const Work = () => {
  return (
    <div id='howwork' className='p-5 pt-14'>
        <h1 className='text-violet-600 text-center text-lg font-medium'>How It Work?</h1>
        <h1 className='h1 lg:text-5xl sm:text-[44px] font-black xs:text-base text-gray-700 my-4 text-center'>Our Process</h1>

        <div className='lg:flex sm:block my-5 justify-around items-center'>
            <WorkCard Img={Img1} title={"Choose Plan"} description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'}/>

            <WorkCard Img={Img2} title={"Payment Method"} description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'}/>

            <WorkCard Img={Img3} title={"Let's Work"} description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'}/>
        </div>

      
    </div>
  )
}

export default Work
