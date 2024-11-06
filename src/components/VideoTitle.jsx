import React from 'react'
import { MdInfo, MdPlayArrow } from 'react-icons/md'
const VideoTitle = ({title, overview}) => {
  return (
    <div Name='w-screen aspect-video bg-gradient-to-r from-black pt-[25%] px-24 absolute text-white'>
        <h1 Name='font-bold text-5xl'>{title}</h1>
        <p Name='w-1/3 text-lg  py-6 text-ellipsis overflow-hidden'>{overview}</p>

        <div Name='flex'>
            <button Name='flex items-center justify-center rounded-lg text-xl bg-white p-5 px-10  text-black hover:bg-opacity-80'><MdPlayArrow Name="text-black" size={24} /> Play</button>
            <button Name=' flex items-center justify-center rounded-lg mx-3 text-xl bg-gray-500 p-5 px-7  text-white bg-opacity-50 hover:bg-opacity-20'><MdInfo Name="text-white bg-transparent" size={24} />More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle