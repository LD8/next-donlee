import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Main from './Main'
import Nav from './Nav'
import Quote from './Quote'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  const isLanding = pathname === '/'

  return (
    <SContainer id='SContainer'>
      <SBGDimmer id='SBGDimmer' darken={isLanding} />
      <Nav />
      {!isLanding && <Main>{children}</Main>}
      <Quote transparent={isLanding} />
    </SContainer>
  )
}

const SContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  background-color: var(--bg-color);
  background-image: url('/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const SBGDimmer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.darken ? '' : 'rgba(0, 0, 0, 0.4)')};
  background-image: linear-gradient(
    to bottom,
    rgba(150, 150, 150, 0.05),
    rgba(0, 0, 0, 0.5)
  );
`
