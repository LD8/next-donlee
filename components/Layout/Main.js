import { createContext, useState } from 'react'
import styled from 'styled-components'

export const mainDivHeightContext = createContext()

export default function Main({ children, show }) {
  const [height, setHeight] = useState(0)
  const { Provider } = mainDivHeightContext

  return (
    <SMain id='SMain' show={show} style={{ height }}>
      <Provider value={setHeight}>{children}</Provider>
    </SMain>
  )
}

const SMain = styled.div`
  position: relative;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: 100%;
  min-height: calc(100vh - var(--nav-height-lg) - 80px);
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0 20px var(--bg-shadow-color);
  color: silver;
  background-image: linear-gradient(
    180deg,
    rgba(40, 43, 41, 0.8),
    rgba(40, 43, 41, 0.9)
  );
  @media only screen and (min-width: 1200px) {
    height: 5vh;
    min-height: calc(100vh - var(--nav-height-sm) - 80px);
  }
`
