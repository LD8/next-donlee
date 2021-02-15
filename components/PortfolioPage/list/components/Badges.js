import Link from 'next/link'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import Badge from './Badge'

export default function Badges({ slug, title, badges, isClicked }) {
  const labelProps = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `translateY(${isClicked ? 0 : -10}px)`,
    delay: 400,
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { mass: 1, tension: 120, friction: 8 },
  })

  return (
    <STechLabels id='STechLabels'>
      <animated.h4 style={labelProps}>{title}</animated.h4>
      <ul>
        {badges?.map((badgeName, i) => (
          <Badge
            key={badgeName}
            isClicked={isClicked}
            badgeName={badgeName}
            index={i}
          />
        ))}
      </ul>
      <Link href={`/portfolio/${slug}`}>
        <a>
          <Badge
            isClicked={isClicked}
            badgeName={'more...'}
            index={badges ? badges.length + 1 : 1}
          />
        </a>
      </Link>
    </STechLabels>
  )
}

const STechLabels = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h4 {
    color: lightgrey;
  }
  ul {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
    li {
      transition: color 0.4s ease;
      will-change: color background-image;
    }
    :hover {
      li {
        color: white;
        background-image: linear-gradient(
          180deg,
          rgba(50, 50, 50, 0.9),
          rgba(60, 60, 60, 0.8)
        );
      }
    }
  }
`
