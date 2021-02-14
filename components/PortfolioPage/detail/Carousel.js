import { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

export default function Carousel({ imgSrcArr }) {
  const [index, set] = useState(0)
  const transitions = useTransition(index, (i) => i, {
    from: {
      opacity: 0,
      position: 'absolute',
      transform: 'translate3d(50%,0,0)',
    },
    enter: {
      opacity: 1,
      position: 'absolute',
      transform: 'translate3d(0%,0,0)',
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      transform: 'translate3d(-50%,0,0)',
    },
  })
  return (
    <SCarousel
      id='SCarousel'
      onClick={() => set(index === imgSrcArr.length - 1 ? 0 : index + 1)}
    >
      {transitions.map(({ item: index, props, key }) => (
        <animated.img
          key={key}
          src={imgSrcArr && imgSrcArr[index]}
          style={props}
        />
      ))}
    </SCarousel>
  )
}

const SCarousel = styled.div`
  position: relative;
  padding-bottom: 66.6%;
  img {
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 15px rgb(20, 15, 30);
    transition: filter 0.5s ease;
    will-change: filter box-shadow;
    :hover {
      box-shadow: 0 0 5px rgb(20, 15, 30);
      filter: brightness(70%);
    }
  }
  figcaption {
    display: none;
  }
`
