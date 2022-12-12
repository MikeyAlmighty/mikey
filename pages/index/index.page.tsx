import React from 'react'
import { motion } from 'framer-motion'

import { ReactComponent as TechBackgroundImage } from '@assets/technology-background.svg'
import Greeting from '@components/greeting'
import Card from '@components/card'
import Social from '@components/social'
import { cardData, socialData } from './data'

export { Page }

function Page() {
  return (
    <div className='lg:text-center bg-gray-100 lg:p-11'>
      <h1 className='lg:text-6xl text-4xl mt-12 lg:mt-0 text-lime-500 font-bold text-center'>Michael Leibbrandt</h1>
      <h1 className='lg:text-4xl text-3xl text-gray-600 font-medium text-center'>Front-End Developer</h1>
      <p className='lg:text-2xl text-xl text-gray-600 font-medium italic text-center'>Design it. Build it. Ship it.</p>
      <Greeting />
      <motion.div
        className='lg:w-full'
        animate={{ scaleY: 1.05, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <TechBackgroundImage className='place-content-center w-full' height='35vh' />
      </motion.div>
      <Card data={cardData} />
      <Social data={socialData} />
    </div>
  )
}
