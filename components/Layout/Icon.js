import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

export default function Icon({ name, imageSource, altText, href, isPostPage }) {
  const [isHovered, set] = useState(false)
  const hoveredProps = useSpring({
    transform: isHovered ? 'rotateZ(360deg)' : 'rotateZ(0deg)',
    transformOrigin: 'center center',
    from: { transform: 'rotateZ(0deg)' },
    config: { mass: 1, tension: 150, friction: 10 },
  })

  return (
    <SIcon id={`SIcon_${name}`} isPostPage={isPostPage}>
      <a target='_blank' rel='noopener noreferrer' href={href}>
        <animated.img
          src={imageSource}
          alt={altText}
          onMouseEnter={() => set(true)}
          onMouseLeave={() => set(false)}
          style={hoveredProps}
        />
      </a>
      <p>{name}</p>
    </SIcon>
  )
}

const SIcon = styled.div`
  height: 100%;
  max-width: 33%;
  color: silver;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > a {
    margin: 0 calc(1vw + 20px);
    img {
      height: ${({ isPostPage }) => (isPostPage ? '30px' : '40px')};
      @media only screen and (max-width: 800px) {
        height: 30px;
      }
    }
  }
  > p {
    display: ${({ isPostPage }) => (isPostPage ? 'none' : 'block')};
    margin-top: 10px;
    font-size: smaller;
    cursor: default;
  }
`
