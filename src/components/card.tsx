import { motion } from 'framer-motion'
// import { ReactComponent as CodingIcon } from "./icon.svg"

type Entry = {
  headerTitle: string
  headerDescription: string
  subTitle: string
  subList: string[]
  footerTitle: string
  footerList: string[]
  experience?: string
}

type CardProps = {
  data: Entry[]
}

const Card = ({ data }: CardProps) => {
  return (
    <div
      className='flex w-full'>
      {data.map(({
        headerTitle,
        headerDescription,
        subTitle,
        subList,
        footerTitle,
        footerList,
        experience
      }, index) => (
        <motion.div
          whileHover={{ scale: 1.025 }}
          key={headerTitle}
          className='m-3 w-full flex-col border border-gray-600 rounded'
        >
          {/* <img src={CodingIcon} style={{ width: '5rem', height: '3rem' }} alt='coding-icon' /> */}
          <p className='text-2xl text-lime-500 font-bold'>{headerTitle}</p>
          <div>
            <p className='text-lg'>{headerDescription}</p>
            <p className='text-lg text-lime-500 font-semibold'>{subTitle}</p>
            {subList.map((entry) => <p>{entry}</p>)}
          </div>
          <p className='text-lg text-lime-500 font-semibold'>{footerTitle}</p>
          {footerList.map((entry) => <p>{entry}</p>)}
        </motion.div>
      ))}
    </div>
  )
}

export default Card
