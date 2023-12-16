import React, { useEffect, useState } from 'react';
import './client.css';
import Testimonial from './Testimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSection = () => {

    const data = [
        {
            name: 'Melu Sahu',
            website: 'codewithmelu.com',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita adipisci est eum architecto laborum iste minima odio laudantium veritatis ab.'
        },
        {
            name: 'Harish',
            website: 'codewithmelu.com',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita adipisci est eum architecto laborum iste minima odio laudantium veritatis ab.'
        },
        {
            name: 'Anima',
            website: 'codewithmelu.com',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita adipisci est eum architecto laborum iste minima odio laudantium veritatis ab.'
        },
        {
            name: 'Himesh',
            website: 'codewithmelu.com',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita adipisci est eum architecto laborum iste minima odio laudantium veritatis ab.'
        },
        {
            name: 'Harish',
            website: 'codewithmelu.com',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita adipisci est eum architecto laborum iste minima odio laudantium veritatis ab.'
        },
        {
            name: 'Anima',
            website: 'codewithmelu.com',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita adipisci est eum architecto laborum iste minima odio laudantium veritatis ab.'
        },
        {
            name: 'Himesh',
            website: 'codewithmelu.com',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita adipisci est eum architecto laborum iste minima odio laudantium veritatis ab.'
        }
    ];

    const [slider, setSlider]=useState(3)

    window.addEventListener('resize', () => {

        console.log(window.innerWidth);
        if(window.innerWidth <= 800){
            setSlider(2);
        }else if(window.innerWidth <= 600){
            setSlider(1);
        }
    })

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slider,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className='lg:pt-10 px-6 py-4 h-[80vh] w-full' id='client'>
            <h1 className='text-center font-bold'>OUR TESTIMONIALS</h1>
            <h1 className='text-center font-black lg:text-5xl sm:text-lg my-3'>Our Client's Says</h1>

            <div className='w-full mt-7'>
                <Slider  {...settings} className='mx-4 lg:flex'>
                    {
                        data.map((client) => (
                            <Testimonial key={client.name} name={client.name} website={client.website} review={client.review} />
                        ))
                    }
                </Slider>
            </div>

        </div>
    )
}

export default ClientSection
