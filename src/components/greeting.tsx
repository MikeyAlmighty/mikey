import { motion } from 'framer-motion'

const Greeting = () => {
  return (
    <motion.div
      className='border w-11/12 border-lime-500 rounded opacity-0'
      animate={{ x: 75, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className='text-xl font-semibold text-gray-600'>Greetings traveler</p>
      <span className='flex justify-center'>
        Since I've started my development career 6 years ago, I have built Single-Page Applications,
        Web Applications and Mobile applications.
        I have worked on projects with both a team and as a solo developer.
        I'm confident, eager, and continuously working on improving my development skills.
      </span>
    </motion.div>
  )
}
export default Greeting
