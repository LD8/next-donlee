import { FOOTER_ICONS } from '../consts'
import styled from 'styled-components'
import Icon from './Icon'
import { memo } from 'react'

export default memo(function Footer({ show, isPostPage }) {
  return (
    <SFooter id='SFooter' show={show} isPostPage={isPostPage}>
      {FOOTER_ICONS.map((i) => (
        <Icon key={i.name} {...i} isPostPage={isPostPage} />
      ))}
    </SFooter>
  )
})

const SFooter = styled.footer`
  opacity: ${({ show }) => (show ? '1' : '0')};
  position: sticky;
  top: 100%;
  width: 100%;
  height: ${({ isPostPage }) => (isPostPage ? '80px' : '160px')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    rgb(40, 46, 41),
    rgba(140, 143, 141, 0.8),
    rgb(40, 46, 41)
  );
`
