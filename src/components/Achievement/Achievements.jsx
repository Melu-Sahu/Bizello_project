import React from 'react'
import AchievementCard from './AchievementCard';
import { FaPeopleLine } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Achievements = () => {
    return (
        <div className='w-full lg:flex sm:block justify-center items-center bg-gray-200 lg:h-80'>

            <AchievementCard Icon={<AiOutlineFundProjectionScreen className='text-white text-4xl' />} numbers={2500} title={'Project'} />
            <AchievementCard Icon={<FaPeopleLine className='text-white text-4xl' />} numbers={2000} title={'Satisfied Clients'} />
            <AchievementCard Icon={<FaAward className='text-white text-4xl' />} numbers={100} title={'Win Awards'} />
            <AchievementCard Icon={<FaPeopleGroup className='text-white text-4xl' />} numbers={500} title={'Team Members'} />


        </div>
    )
}

export default Achievements
