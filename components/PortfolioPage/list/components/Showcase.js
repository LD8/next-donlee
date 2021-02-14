import { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
// import TechLabels from './TechLabels'

export default function Showcase({
  slug,
  title,
  summary,
  imgSrcArr,
  content,
  techs,
  links,
  startedAt,
  endedAt,
}) {
  const [isClicked, setIsClicked] = useState(false)
  const { opacity, transform } = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `perspective(600px) rotateX(${isClicked ? 180 : 0}deg)`,
    config: { mass: 4, tension: 200, friction: 35 },
  })

  return (
    <SCard className='card' onClick={() => setIsClicked(!isClicked)}>
      <animated.img
        className='card-front'
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
        src={imgSrcArr[0]}
        alt={`Project: ${title} for the front of the card`}
      />
      <animated.img
        className='card-back'
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
        src={imgSrcArr[1]}
        alt={`Project: ${title} for the back of the card`}
      />
      {/* {isClicked && (
        <TechLabels
          url={url}
          slug={slug}
          title={title}
          labels={labels}
          isClicked={isClicked}
        />
      )} */}
    </SCard>
  )
}

const SCard = styled.div`
  position: relative;
  width: 40%;
  margin: calc(1vmin + 10px);
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.5s ease;
  will-change: transform;
  font-size: 0;
  :hover {
    transform: scale(1.03);
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 0 15px rgb(10, 5, 30);
  }
  .card-back {
    position: absolute;
    left: 0;
    filter: brightness(30%);
  }
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`
