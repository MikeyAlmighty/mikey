import React from 'react'
import Card from '@components/card'

import Greeting from '@components/greeting'
import { cardData } from './data'

export { Page }

function Page() {
  return (
    <div className='text-center p-11 bg-gray-100 h-full'>
      <div>
        <h1 className='text-6xl text-lime-500 font-bold'>Michael Leibbrandt</h1>
      </div>
      <h1 className='text-4xl text-gray-600 font-medium'>Front-End Developer</h1>
      <p className='text-2xl text-gray-600 font-medium italic'>Design it. Build it. Ship it.</p>
      <Greeting />
      <Card data={cardData} />
    </div>
  )
}
