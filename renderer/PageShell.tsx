import React from 'react'
import logo from './logo.svg'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'
import { Link } from './Link'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          {/* <Sidebar> */}
          {/*   <Link className="navitem" href="/"> */}
          {/*     Home */}
          {/*   </Link> */}
          {/*   <Link className="navitem" href="/about"> */}
          {/*     About */}
          {/*   </Link> */}
          {/* </Sidebar> */}
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    {children}
  </div>
)

const Content = ({ children }: { children: React.ReactNode }) => (
  <div>
    {children}
  </div>
)
