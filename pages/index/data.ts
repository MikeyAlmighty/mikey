import { ReactComponent as ComputerIcon } from '@assets/computer.svg'
import { ReactComponent as MobileIcon } from '@assets/mobile-device.svg'
import { ReactComponent as TechnicalSkillsIcon } from '@assets/technical-skills.svg'
import { ReactComponent as SoftSkillsIcon } from '@assets/soft-skills.svg'

import { ReactComponent as ReactIcon } from '@assets/react.svg'
import { ReactComponent as JavaScriptIcon } from '@assets/javascript.svg'
import { ReactComponent as TypeScriptIcon } from '@assets/typescript.svg'
import { ReactComponent as NextJsIcon } from '@assets/nextjs.svg'
import { ReactComponent as VSCodeIcon } from '@assets/visual-studio-code.svg'
import { ReactComponent as EmacsIcon } from '@assets/emacs.svg'
import { ReactComponent as VIMIcon } from '@assets/vim.svg'
import { ReactComponent as StorybookIcon } from '@assets/storybook.svg'
import { ReactComponent as GitIcon } from '@assets/git.svg'
import { ReactComponent as LinuxIcon } from '@assets/linux.svg'
import { ReactComponent as BashIcon } from '@assets/bash.svg'
import { ReactComponent as DockerIcon } from '@assets/docker.svg'
import { ReactComponent as KubernetesIcon } from '@assets/kubernetes.svg'
import { ReactComponent as FigmaIcon } from '@assets/figma.svg'
import { ReactComponent as AgileIcon } from '@assets/agile.svg'
import { ReactComponent as JiraIcon } from '@assets/jira.svg'


import { ReactComponent as GithubIcon } from '@assets/github.svg'
import { ReactComponent as LinkedInIcon } from '@assets/linkedIn.svg'

export const cardData = [
  {
    header: {
        label: 'Front-End Developer',
        Icon: ComputerIcon,
        alt: 'computer-icon',
    },
    description: 'I like to bring ideas to life in the browser by connecting users to products through sleek interfaces with code.',
    subTitle: 'Languages & Frameworks',
    subList: [
      { label: 'Next.js', alt: 'nextjs-icon', Icon: NextJsIcon },
      { label: 'React', alt: 'react-icon', Icon: ReactIcon },
      { label: 'TypeScript', alt: 'typescript-icon', Icon: TypeScriptIcon },
      { label: 'JavaScript', alt: 'javascript-icon', Icon: JavaScriptIcon },
      { label: 'Storybook', alt: 'storybook-icon', Icon: StorybookIcon }
    ],
    footerTitle: 'Dev Tools',
    footerList: ['REST', 'Webpack', 'Jest', 'ESLint/Prettier', 'Babel', 'Vite', 'TSC',],
    experience: '6 years'
  },
  {
    header: {
        label: 'Mobile Developer',
        Icon: MobileIcon,
        alt: 'mobile-icon',
    },
    title: 'Mobile Developer',
    description: 'I like to code mobile applications bringing products into the hands of a user',
    subTitle: 'Languages',
    subList: [
      { label: 'React Native', alt: 'react-native-icon', Icon: ReactIcon },
      { label: 'TypeScript', alt: 'typescript-icon', Icon: TypeScriptIcon },
      { label: 'JavaScript', alt: 'javascript-icon', Icon: JavaScriptIcon },
      { label: 'Storybook', alt: 'storybook-icon', Icon: StorybookIcon }
    ],
    footerTitle: 'Dev Tools',
    footerList: ['Metro', 'XCode', 'Android Studio'],
    experience: '1 year'
  },
  {
    header: {
        label: 'Technical Skills',
        Icon: TechnicalSkillsIcon ,
        alt: 'technical-skills-icon',
    },
    description: 'I have created an environment in which I write software and build products focusing on both quality and speed (time of delivery).',
    subTitle: 'Skills',
    subList: [
      { label: 'Emacs', alt: 'emacs-icon', Icon: EmacsIcon },
      { label: 'VIM', alt: 'vim-icon', Icon: VIMIcon },
      { label: 'VSCode', alt: 'visual-studio-code-icon', Icon: VSCodeIcon },
      { label: 'Git (VCS)', alt: 'git-icon', Icon: GitIcon },
      { label: 'Linux', alt: 'linux-icon', Icon: LinuxIcon },
      { label: 'Bash CLI', alt: 'bash-icon', Icon: BashIcon },
      { label: 'Docker', alt: 'docker-icon', Icon: DockerIcon },
      { label: 'Kubernetes', alt: 'kubernetess-icon', Icon: KubernetesIcon }
    ],
    footerTitle: 'CI/CD',
    footerList: ['Github Actions (CI/CD)', 'Jenkins']
  },
  {
    header: {
        label: 'Soft Skills',
        Icon: SoftSkillsIcon,
        alt: 'soft-skills-icon',
    },
    description: 'I value building software in iterations in an efficient manner using modern Agile methodologies.',
    subTitle: 'Frameworks',
    subList: [
      { label: 'Figma', alt: 'figma-icon', Icon: FigmaIcon },
      { label: 'Agile (SCRUM)', alt: 'agile-icon', Icon: AgileIcon },
      { label: 'Jira/Confluence', alt: 'jira-icon', Icon: JiraIcon }
    ],
    footerTitle: 'Skills',
    footerList: ['Passionate', 'Well versed in English (Excellent communicator)', 'Team player'],
  }
]

export const socialData = [
   {
      label: 'Github',
      Icon: GithubIcon,
      alt: 'github-icon',
      link: 'https://github.com/MikeyAlmighty'
   },
   {
      label: 'LinkedIn',
      Icon: LinkedInIcon,
      alt: 'linkedIn-icon',
      link: 'https://www.linkedin.com/in/michael-leibbrandt-10904b151/'
   },
]
