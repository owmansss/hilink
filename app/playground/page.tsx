'use client'

import React from 'react'
import Image from 'next/image'
import { useScroll, useSpring, motion } from 'framer-motion'

const Playground = () => {
 const { scrollYProgress } = useScroll()
 const scaleX = useSpring(scrollYProgress)

  return (
    <div className='max-w-4xl border-2 h-[150vh] mx-auto my-[10vh]'>
      <motion.section className='flexCenter flex-col'
      style={{
       scaleX
      }}
      >
        <div className='padding-container max-container w-full pb-24'>
          <Image src='camp.svg' alt='camp' width={50} height={50} />
          <p className='regular-18 -mt-1 mb-3 text-green-50'>
            WE ARE HERE FOR YOU
          </p>
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
            <h2 className='bold-40 lg:bold-64 xl:max-w-[390px] capitalize'>
              guide you to easy path
            </h2>
            <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde
              laboriosam, consectetur quasi, optio facere iure tempore ut
              delectus eius assumenda sunt laborum ratione nihil eligendi. Harum
              quis ipsum quidem.
            </p>
          </div>
        </div>
        <div className='flexCenter max-container relative w-full'>
          <Image
            src='/boat.png'
            alt='boat'
            width={1440}
            height={580}
            className='w-full object-cover object-center 2xl:rounded-xl rounded-xl m-1 p-1'
          />
          <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-[20%]'>
            <Image
              src='/meter.svg'
              alt='meter'
              width={16}
              height={158}
              className='h-full w-auto '
            />
            <div className='flex items-center justify-between flex-col '>
              <div className='flex w-full flex-col'>
                <div className='flex items-center justify-between w-full gap-5'>
                  <p className='regular-16 text-gray-20'>Destination </p>
                  <p className='bold-16 text-green-50'>48 KM</p>
                </div>
                <p className='bold-20 mt-2'>Aguas Calienters</p>
              </div>
              <div className='flex w-full flex-col'>
                <p className='regular-16 text-gray-20'>Start Track </p>
                <h4 className='whitespace-nowrap bold-20 mt-2'>
                  Ciamis, Maleber
                </h4>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <div className='border-2 border-red-500 w-full h-[20vh] relative flex flex-1 gap-10 flex-nowrap overflow-x-scroll overflow-y-hidden'>
       <div className='w-[100vh] h-[10vh] bg-red-500 my-10'></div>
       <div className='w-[100vh] h-[10vh] bg-red-500 my-10'></div>
       <div className='w-[100vh] h-[10vh] bg-blue-500 my-10'></div>
      </div>
    </div>
  )
}

export default Playground
