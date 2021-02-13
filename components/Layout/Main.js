import { createContext, useState } from 'react'
import styled from 'styled-components'
import { FOOTER_ICONS } from '../consts'
import Icon from './Icon'

export const mainDivHeightContext = createContext()

export default function Main({ children, show }) {
  const footerContent = FOOTER_ICONS.map((i) => <Icon key={i.name} {...i} />)
  const [height, setHeight] = useState(0)
  const { Provider } = mainDivHeightContext
  return (
    <SMainWrapper id='SMainWrapper' show={show}>
      <Provider value={setHeight}>
        <main style={{ height }}>{children}</main>
      </Provider>
      <footer>{footerContent}</footer>
    </SMainWrapper>
  )
}

const SMainWrapper = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: 100%;
  min-height: 93vh;
  /* height: 1000px; */
  z-index: 5;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 0 20px var(--bg-shadow-color);
  color: silver;
  background-image: linear-gradient(
    180deg,
    rgba(40, 43, 41, 0.8),
    rgba(40, 43, 41, 0.9)
  );

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > footer {
    position: sticky;
    top: 100%;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      90deg,
      rgb(40, 46, 41),
      rgba(140, 143, 141, 0.8),
      rgb(40, 46, 41)
    );
  }
`
