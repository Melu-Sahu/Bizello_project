import React from 'react';
import './contact.css';
import { useFormik } from 'formik';
import Input from './Input';
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Button from '../Button/Button';



const Contact = () => {


  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      subject: ''
    },


    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='w-full pt-10 '>

      <h1 className='text-center text-indigo-500 font-mono text-lg '>Need Help ?</h1>
      <h1 className='lg:text-5xl sm:text-xl font-bold text-center lg:my-5 sm:my-3 text-gray-700 '>Quick Contact</h1>
      <div className='lg:flex sm:block w-full lg:p-10 sm:4'>
        <div className='px-4 lg:w-2/5 sm:w-full lg:h-[550px] sm:h-72 flex flex-col justify-center items-center text-white' id='imgDiv'>

          <h1 className='font-black lg:text-5xl sm:text-2xl'>Do you have any Questions?</h1>
          <p className='pe-16 my-3 sm:text-center'>But we ipsum dolor sit amet consectetur adeisicing elit, sed do eiusmod tncididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className='lg:w-3/5 sm:w-full p-3 ' >

          <h1 className='text-gray-700 lg:text-3xl sm:text-xl font-bold'>Please Fill Up The Form To Contact With Us</h1>
          <p className='text-gray-400 my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

          <form action="" onSubmit={formik.handleSubmit} className='w-full lg:flex sm:block flex-wrap px-3 '>

            <Input
              placeholder={"Your full name"}
              id={"fullname"}
              name={"fullname"}
              type={'text'}
              onChange={formik.handleChange}
              value={formik.values.fullname}
              icon={<CiUser className='text-lg mx-1' />} />

            <Input
              placeholder={"Your Email"}
              id={"email"}
              name={"email"}
              type={'email'}
              onChange={formik.handleChange}
              value={formik.values.email}
              icon={<CiMail className='text-lg mx-1' />} />

            <Input
              placeholder={"Your Subject"}
              id={"subject"}
              name={"subject"}
              type={'text'}
              onChange={formik.handleChange}
              value={formik.values.subject}
              icon={<IoIosArrowDown className='text-lg mx-1' />} />

            <Input
              placeholder={"Your Phone"}
              id={"phone"}
              name={"phone"}
              type={"number"}
              onChange={formik.handleChange}
              value={formik.values.number}
              icon={<MdOutlinePhoneInTalk className='text-lg mx-1' />} />

              <textarea className='w-full p-2 bg-gray-200 rounded focus:outline-blue-400 ms-5' placeholder='Enter your messge'></textarea>

              <Button type="submit" btnText={'Submit'} className='my-5 mx-5' />

          </form>

        </div>
      </div>

    </div>
  )
}

export default Contact
