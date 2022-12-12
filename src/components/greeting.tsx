import { motion } from 'framer-motion'

const Greeting = () => (
  <motion.div
    className='border lg:p-8 p-4 my-6 lg:w-11/12 w-8/12 border-lime-500 rounded opacity-0 shadow shadow-lime-500'
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

export default Greeting
