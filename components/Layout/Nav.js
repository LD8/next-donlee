import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { memo } from 'react'
import { NAV_LINKS } from '../consts'

export default memo(function Nav() {
  const { pathname } = useRouter()
  return (
    <SNav toTop={pathname !== '/'}>
      <ul>
        {NAV_LINKS.map(({ name, path }) => (
          <li key={path}>
            <Link passHref href={pathname !== path ? path : '/'}>
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
})

const SNav = styled.nav`
  position: absolute;
  width: 100%;
  max-width: 1000px;
  height: var(--nav-height-lg);
  top: ${({ toTop }) => (toTop ? '0' : '40vh')};
  z-index: 10;
  transition: all 0.5s ease;
  @media only screen and (min-width: 1200px) {
    height: var(--nav-height-sm);
  }
  ul {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
    li {
      list-style: none;
      margin: 0 1rem;
    }
  }
`

const SAnchor = styled.a`
  position: relative;
  text-decoration: none;
  font-family: var(--nav-font);
  color: white;
  letter-spacing: 0.1rem;
  text-shadow: ${({ isActive }) =>
    isActive ? '4px 4px 4px rgb(10, 5, 1)' : '3px 3px 10px rgb(10, 5, 30)'};
  transition: all 0.5s ease;
  will-change: font-size color;

  font-size: ${({ isActive }) =>
    // isActive ? is visiting the path : idle
    isActive ? 'calc(2vmin + 20px)' : 'calc(1vmin + 15px)'};

  :hover {
    font-size: ${({ isHome }) =>
      // isHome ? hovered at home page : hovered elsewhere
      isHome ? 'calc(3vmin + 25px)' : 'calc(2vmin + 20px)'};
    color: var(--link-text-color);
  }
  cursor: pointer;
`
