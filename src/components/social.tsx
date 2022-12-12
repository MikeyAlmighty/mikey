import { ReactNode } from 'react'

type SocialProps = {
  data: Array<{ Icon: ReactNode, label: string, alt: string, link: string }>
}

const Social = ({ data }: SocialProps) => {
  return (
    <div className='flex pt-4 pb-4 lg:place-content-center justify-center align-middle items-center'>
      {data.map(({ Icon, label, alt, link }) => (
        <div key={alt} className='cursor-pointer' onClick={() => window.open(link)}>
          <Icon className='h-8' />
        </div>
      ))}
    </div >
  )
}

export default Social
