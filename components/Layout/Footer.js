import { FOOTER_ICONS } from '../consts'
import styled from 'styled-components'
import Icon from './Icon'
import { memo } from 'react'

export default memo(function Footer({ show }) {
  return (
    <SFooter id='SFooter' show={show}>
      {FOOTER_ICONS.map((i) => (
        <Icon key={i.name} {...i} />
      ))}
    </SFooter>
  )
})

const SFooter = styled.footer`
  transition: all 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(50px)')};
  position: fixed;
  right: calc((100vw - 1200px) / 2);
  bottom: 25vh;

  > div {
    margin: 30px 0;
    height: 100%;
    /* transition: all 0.5s ease-in-out;
    margin: ${({ show }) => (show ? '30px 0' : '-30px 0')}; */
    > a {
      display: flex;
      color: silver;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-right: 12px;
      text-decoration: none;
      > img {
        height: 30px;
        filter: brightness(55%);
      }
      > p {
        transition: all 0.3s ease-in-out;
        visibility: hidden;
        opacity: 0;
        transform: translateX(-8px);
      }

      :hover {
        > img {
          filter: brightness(100%);
        }
        > p {
          visibility: visible;
          opacity: 1;
          transform: translateX(10px);
        }
      }
    }
  }
  /* on small screen */
  @media only screen and (max-width: 1200px) {
    position: sticky;
    top: 100%;
    width: 100%;
    height: var(--footer-height);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      90deg,
      rgb(40, 46, 41),
      rgba(140, 143, 141, 0.8),
      rgb(40, 46, 41)
    );

    > div {
      margin: 0;
      max-width: 33%;
      > a {
        margin: 0 calc(2vw + 20px);
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > img {
          height: 20px;
          filter: brightness(100%);
        }
        > p {
          transform: none;
          visibility: visible;
          opacity: 1;
          margin-top: 8px;
          font-size: smaller;
        }
        :hover {
          > img {
          }
          > p {
            transform: none;
          }
        }
      }
    }
  }
`
