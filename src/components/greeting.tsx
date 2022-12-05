import { motion } from 'framer-motion'

const Greeting = () => (
  <motion.div
    className='border w-6/12 border-gray-600 rounded opacity-0 m-auto my-4 py-2'
    animate={{
      opacity: 1,
      boxShadow: '0.25em 0.15em #84CC16'
    }}
    transition={{ duration: 1 }}
  >
    <p className='text-xl font-semibold text-lime-500'>Greetings traveler</p>
    <p className='text-lg flex justify-center text-gray-600'>
      Since I've started my development career 6 years ago, I have built Single-Page Applications,
      Web Applications and Mobile applications.
      I have worked on projects with both a team and as a solo developer.
      I'm confident, eager, and continuously working on improving my development skills.
    </p>
  </motion.div>
)

export default Greeting
