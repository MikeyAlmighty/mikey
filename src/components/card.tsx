import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ListEntry = Array<{ label: string, Icon?: ReactNode, alt?: string }>

type CardData = {
  title: string
  description: string
  subTitle: string
  subList: ListEntry
  footerTitle: string
  footerList: string[]
  experience?: string
}

type CardProps = {
  data: CardData[]
}

const Card = ({ data }: CardProps) => {
  return (
    <div
      className='flex w-full'>
      {data.map(({
        title,
        description,
        subTitle,
        subList,
        footerTitle,
        footerList,
        experience
      }, index) => (
        <motion.div
          whileHover={{
            scale: 1.025,
            boxShadow: '0.5em 0.25em #84CC16'
          }}
          key={title}
          className='m-3 w-full flex-col border border-gray-600 rounded'
        >
          {/* <img src={CodingIcon} style={{ width: '5rem', height: '3rem' }} alt='coding-icon' /> */}
          <p className='text-2xl text-lime-500 font-bold'>{title}</p>
          <p className='text-lg text-gray-600 py-2'>{description}</p>
          <p className='text-lg text-lime-500 font-medium'>{subTitle}</p>
          {subList.map(({ label, alt, Icon }) => (
            <div className='flex items-center justify-center'>
              {Icon && <Icon width='1.5em' height='1em' />}
              <p className='text-gray-600'>{label}</p>
            </div>
          ))}
          <p className='text-lg text-lime-500 py-2 font-medium'>{footerTitle}</p>
          {footerList.map((label) => (
            <>
              <p className='text-gray-600'>{label}</p>
            </>
          ))}
          {experience && <p>Experience: {experience}</p>}
        </motion.div>
      ))
      }
    </div >
  )
}

export default Card
