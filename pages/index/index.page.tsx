import React from 'react'
import Card from '@components/card'

import Greeting from '@components/greeting'
import { cardData } from './data'

export { Page }

function Page() {
  return (
    <>
      <Greeting />
      <Card data={cardData} />
    </>
  )
}
