import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGooglePlus } from "react-icons/fa";
import FooterLinks from './FooterLinks';



const Footer = () => {

    let links = ["Home", "About Us", 'Feature', "Client", "Contact"];
    let SupportLinks = ['Help & Support', 'Privacy Policy', 'Terms and Conditions'];
    let addressLinks = ['Ameerpet, Hyderabad, Telengana', 'melusahu0143.s@gmail.com', '+91 7583000742'];

    return (
        <div className='bg-gradient-to-r from-purple-600 to-indigo-800  lg:flex lg:justify-around sm:block
        lg:pt-20 sm:pt-10 lg:px-20 sm:px-10 text-white'>

            <div className='lg:w-2/5 mx-5'>
                <h1 className='font-mono text-3xl py-4'>BIZELLO</h1>
                <p className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className='flex justify-around items-center px-20'>
                    <a className='cursor-pointer' href='#home'><CiFacebook className='font-bold text-3xl rounded-full m-4 ' /></a>
                    <a className='cursor-pointer' href='#home'><TiSocialLinkedinCircular className='font-bold text-4xl rounded-full m-4 ' /></a>
                    <a className='cursor-pointer' href='#home'><AiFillTwitterCircle className='font-bold text-3xl rounded-full m-4 ' /></a>
                    <a className='cursor-pointer' href='#home'><FaGooglePlus className='font-bold text-3xl rounded-full m-4 ' /></a>
                </div>
            </div>

            <FooterLinks title={'Quick Links'} links={links} />
            <FooterLinks title={'Support Links'} links={SupportLinks} />
            <FooterLinks title={'Address'} links={addressLinks} />

        </div>
    )
}

export default Footer

