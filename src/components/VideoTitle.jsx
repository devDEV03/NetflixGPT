import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-24 absolute text-white'>
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='w-1/3 text-lg  py-6'>{overview}</p>

        <div>
            <button className='rounded-lg text-xl bg-white p-5 px-10  text-black hover:bg-opacity-80'>▶ Play</button>
            <button className='rounded-lg mx-3 text-xl bg-gray-500 p-5 px-7  text-white bg-opacity-50'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle