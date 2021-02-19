import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Dimmer from './Dimmer'
import Footer from './Footer'
import Main from './Main'
import Nav from './Nav'
import Quote from './Quote'

export const Layout = ({ children }) => {
  const { pathname } = useRouter()
  const isLanding = pathname === '/'
  const isPostPage = pathname === '/blog/[slug]'

  return (
    <SContainer id='SContainer' isLanding={isLanding}>
      <Head>
        <title>Peiwen Li</title>
      </Head>
      <Dimmer lighten={isLanding} />
      <Nav />
      <Quote show={isLanding} />
      {/* <Main show={!isLanding} isPostPage={isPostPage}>
        {children}
      </Main>
      <Footer show={!isLanding} isPostPage={isPostPage} /> */}
      {children}
    </SContainer>
  )
}

const SContainer = styled.div`
  position: relative;
  padding-top: ${({ isLanding }) => (isLanding ? '' : 'var(--nav-height-lg)')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--bg-color);
  background-image: url('/bg.jpg');
  background-size: ${({ isLanding }) => (isLanding ? 'cover' : '100%')};
  background-position: top;
  @media only screen and (min-width: 1200px) {
    padding-top: ${({ isLanding }) =>
      isLanding ? '' : 'var(--nav-height-sm)'};
  }
`
