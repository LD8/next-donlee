import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { NAV_LINKS } from '../consts'

// const capitalize = (text) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`

export default function Nav() {
  const { pathname } = useRouter()
  return (
    <SNav top={pathname === '/'}>
      <ul>
        {NAV_LINKS.map(({ name, path }) => (
          <li key={path}>
            <Link href={pathname !== path ? path : '/'}>
              <SAnchor
                // isActive={
                //   pathname === path.slice(0, pathname.length) ||
                //   pathname === '/'
                // }
                isActive={pathname === path || pathname === '/'}
                isHome={pathname === '/'}
              >
                {name}
              </SAnchor>
            </Link>
          </li>
        ))}
      </ul>
    </SNav>
  )
}

const SNav = styled.nav`
  position: absolute;
  width: 100%;
  max-width: 1000px;
  height: 7vh;
  top: ${(props) => (props.top ? '40vh' : '0')};
  z-index: 10;
  transition: all 0.5s ease;
  ul {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 800px) {
      width: 100%;
      justify-content: space-between;
    }
    li {
      list-style: none;
      margin: 0 10px;
    }
  }
`

const SAnchor = styled.a`
  position: relative;
  text-decoration: none;
  font-family: var(--nav-font);
  font-size: ${({ isActive }) =>
    isActive ? 'calc(2vmin + 25px)' : 'calc(1vmin + 15px)'};
  color: white;
  letter-spacing: 2px;

  text-shadow: ${({ isActive }) =>
    isActive ? '4px 4px 4px rgb(10, 5, 1)' : '3px 3px 10px rgb(10, 5, 30)'};
  transition: all 0.5s ease;
  will-change: font-size color;
  :hover {
    font-size: ${({ isHome }) =>
      isHome ? 'calc(3vmin + 25px)' : 'calc(2vmin + 25px)'};
    color: var(--link-text-color);
  }
  cursor: pointer;
`
