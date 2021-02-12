import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

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
    <SIcon id={`SIcon_${name}`}>
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
    </SIcon>
  )
}

const SIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 calc(1vw + 20px);
    padding: 0;

    img {
      height: 40px;
      @media only screen and (max-width: 800px) {
        height: 35px;
      }
    }
  }
  p {
    margin-top: 10px;
    font-size: small;
    a {
      color: rgb(220, 220, 220);
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`
