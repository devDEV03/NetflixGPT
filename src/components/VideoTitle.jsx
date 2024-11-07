import React from 'react'
import { MdInfo, MdPlayArrow } from 'react-icons/md'
const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute w-screen md:px-32  text-white aspect-video pt-[70%] md:pt-[25%] px-5 md:px-20 absolute md:bg-gradient-to-r md:from-black/70 md:to-transparent'>
        <h1 className='font-bold text-2xl md:text-5xl'>{title}</h1>
        <p className='w-1/3 hidden  md:flex text-lg  py-6 text-ellipsis overflow-hidden'>{overview}</p>

        <div className='flex'>
            <button className='flex items-center p-2 text-sm justify-center rounded-lg md:text-xl bg-white md:p-5 md:px-10  text-black hover:bg-opacity-80'><MdPlayArrow Name="text-black" size={24} /> Play</button>
            <button className=' flex items-center p-2 text-sm justify-center rounded-lg mx-3 md:text-xl bg-gray-500 md:p-5 md:px-7  text-white bg-opacity-50 hover:bg-opacity-20 hidden md:flex'><MdInfo Name="text-white bg-transparent" size={24} />More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle