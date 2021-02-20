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
    <div>
      <ExternalLink href={href}>
        <animated.img
          src={imageSource}
          alt={altText}
          onMouseEnter={() => set(true)}
          onMouseLeave={() => set(false)}
          style={hoveredProps}
        />
        <p>{name}</p>
      </ExternalLink>
    </div>
  )
}
