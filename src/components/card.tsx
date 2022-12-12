import { ReactNode, Fragment } from 'react'
import { motion } from 'framer-motion'

type ListEntry = { label: string, Icon?: ReactNode, alt?: string }

type CardData = {
  header: ListEntry
  description: string
  subTitle: string
  subList: ListEntry[]
  footerTitle: string
  footerList: string[]
  experience?: string
}

type CardProps = {
  data: CardData[]
}

const Card = ({ data }: CardProps) => (
  <div
    className='lg:flex lg:w-full mx-4 lg:mx-0'>
    {data.map(({
      header,
      description,
      subTitle,
      subList,
      footerTitle,
      footerList,
      experience
    }, index) => (
      <motion.div
        whileHover={{
          scale: 1.005,
          boxShadow: '0.5em 0.25em #84CC16',
          border: '1px solid #84CC16'
        }}
        key={header.alt}
        className='lg:m-3 my-3 p-3 w-full flex-col lg:flex text-center border border-gray-600 rounded'
      >
        {header.Icon && <header.Icon className='mx-auto my-6' width='7em' height='5em' alt='header-icon' />}
        <p className='text-2xl text-lime-500 font-bold'>{header.label}</p>
        <p className='text-lg text-gray-600 py-2'>{description}</p>
        <p className='text-lg text-lime-500 font-medium'>{subTitle}</p>
        {subList.map(({ label, alt, Icon }) => (
          <div key={alt} className='flex items-center justify-center'>
            {Icon && <Icon width='1.5em' height='1em' />}
            <p className='text-gray-600'>{label}</p>
          </div>
        ))}
        <p className='text-lg text-lime-500 py-2 font-medium'>{footerTitle}</p>
        {footerList.map((label) => (
          <Fragment key={label}>
            <p className='text-gray-600'>{label}</p>
          </Fragment>
        ))}
        {experience && <p className='text-lime-500 font-bold'>Experience: {experience}</p>}
      </motion.div>
    ))
    }
  </div >
)

export default Card
