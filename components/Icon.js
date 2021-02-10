import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export default function Icon({ name, imageSource, altText, index, href }) {
  const [isHovered, setIsHovered] = useState(false)
  const dangleProps = useSpring({
    transform: 'rotateZ(0deg)',
    transformOrigin: 'top',
    from: { transform: 'rotateZ(180deg)' },
    config: { mass: 1, tension: 210 - index * 50, friction: 5 },
  })

  const hoveredProps = useSpring({
    transform: isHovered ? 'rotateZ(360deg)' : 'rotateZ(0deg)',
    transformOrigin: 'center center',
    from: { transform: 'rotateZ(0deg)' },
    config: { mass: 1, tension: 150, friction: 10 },
  })

  return (
    <div className='icon'>
      <animated.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={hoveredProps}
      >
        <a
          target='_blank'
          rel='noopener noreferrer'
          // href={href === '' ? `${url.match(/.*\//)[0]}cv` : href}
          href={href}
        >
          <animated.img src={imageSource} alt={altText} style={dangleProps} />
        </a>
      </animated.div>
      <p>
        <a
          target='_blank'
          rel='noopener noreferrer'
          // href={href === '' ? `${url.match(/.*\//)[0]}cv` : href}
          href={href}
        >
          {name}
        </a>
      </p>
    </div>
  )
}
