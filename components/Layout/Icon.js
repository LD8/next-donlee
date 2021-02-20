import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { ExternalLink } from '..'

export default function Icon({ name, imageSource, altText, href }) {
  const [isHovered, set] = useState(false)
  const hoveredProps = useSpring({
    transform: isHovered ? 'rotateZ(360deg)' : 'rotateZ(0deg)',
    transformOrigin: 'center center',
    from: { transform: 'rotateZ(0deg)' },
    config: { mass: 1, tension: 150, friction: 10 },
  })

  return (
    <SIcon id={`SIcon_${name}`}>
      <ExternalLink href={href}>
        <animated.img
          src={imageSource}
          alt={altText}
          onMouseEnter={() => set(true)}
          onMouseLeave={() => set(false)}
          style={hoveredProps}
        />
      </ExternalLink>
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
      height: 30px;
      @media only screen and (max-width: 800px) {
        height: 30px;
      }
    }
  }
  > p {
    display: none;
    margin-top: 10px;
    font-size: smaller;
    cursor: default;
  }
`
