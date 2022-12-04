import Card from './components/card'

const cardData = [
  {
    headerTitle: 'Front-End Developer',
    headerDescription: 'I like to bring ideas to life in the browser by connecting users to products through sleek interfaces with code.',
    subTitle: 'Languages & Frameworks',
    subList: ['Next.js', 'React', 'TypeScript/JavaScript'],
    footerTitle: 'Dev Tools',
    footerList: ['Vite', 'TSC', 'Babel', 'ESLint', 'Storybook'],
    experience: '5 years'
  },
  {
    headerTitle: 'Mobile Developer',
    headerDescription: 'I like to code mobile applications bringing products into the hands of a user',
    subTitle: 'Languages',
    subList: ['React Native', 'TypeScript/JavaScript'],
    footerTitle: 'Dev Tools',
    footerList: ['Metro', 'XCode', 'Android Studio', 'Storybook'],
    experience: '1 year'
  },
  {
    headerTitle: 'Technical Skills',
    headerDescription: 'I have created an environment in which I write software and build products focusing on both quality and speed (time of delivery).',
    subTitle: 'Skills',
    subList: ['Emacs/VIM', 'VSCode'],
    footerTitle: 'Tools',
    footerList: ['Git (Version Control)', 'Linux & (Bash CLI)', 'Github Actions (CI/CD)', 'Docker', 'Kubernetes'],
  },
  {
    headerTitle: 'Soft Skills',
    headerDescription: 'I value building software in iterations in an efficient manner using modern Agile methodologies.',
    subTitle: 'Skills',
    subList: ['Well versed in English (Excellent communicator)', 'Team player'],
    footerTitle: 'Frameworks',
    footerList: ['Figma design', 'Agile/SCRUM', 'Jira/Confluence'],
  }
]

const App = () => (
  <div className='text-center p-11 bg-gray-100 h-full'>
    <div>
      <h1 className='text-6xl text-lime-500 font-bold'>Michael Leibbrandt</h1>
    </div>
    <h1 className='text-4xl text-gray-600 font-medium'>Front-End Developer</h1>
    <p className='text-2xl text-gray-600 font-medium italic'>Design it. Build it. Ship it.</p>
    <p className='text-xl font-semibold text-gray-600'>Greetings traveler</p>
    <p className='text-xl text-gray-600'>
      Since I've started my development career 6 years ago, I have built Single-Page Applications, Web Applications and a mobile application.
    </p>
    <Card data={cardData} />
  </div>
)

export default App
