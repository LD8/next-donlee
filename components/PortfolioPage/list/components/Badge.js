import Link from 'next/link'
import { useRouter } from 'next/router'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

export default function Badge({
  isClicked = true,
  badgeName,
  index = 0,
  asFilter = false,
}) {
  const {
    query: { badge = null },
  } = useRouter()

  const labelProps = useSpring({
    opacity: isClicked ? 1 : 0,
    transform: `translateY(${isClicked ? 0 : -20}px)`,
    delay: 100 * (index + 4),
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { mass: 1, tension: 120, friction: 8 },
  })
  const selected = badge === badgeName

  return asFilter ? (
    <SLiFilter style={labelProps} selected={selected}>
      <Link
        href={{
          pathname: '/portfolio',
          query: { badge: selected ? null : badgeName },
        }}
      >
        <a>{badgeName}</a>
      </Link>
    </SLiFilter>
  ) : (
    <SLi style={labelProps}>{badgeName}</SLi>
  )
}

const SLi = styled(animated.li)`
  list-style: none;
  width: 90px;
  height: 30px;
  padding-top: 6px;
  margin: 1px;
  color: silver;
  text-align: center;
  font-size: 14px;
  border-radius: 3px;
  text-transform: uppercase;
  background-image: linear-gradient(
    180deg,
    rgba(70, 70, 70, 0.8),
    rgba(30, 30, 30, 0.9)
  );
`

const SLiFilter = styled(animated.li)`
  list-style: none;
  width: 90px;
  height: 30px;
  padding-top: 6px;
  margin: 1px;
  text-align: center;
  font-size: 14px;
  border-radius: 3px;
  text-transform: uppercase;
  a {
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    color: ${({ selected }) =>
      selected ? 'white' : 'silver'};
    :hover {
      color: white;
    }
  }
  background-image: ${({ selected }) =>
    selected
      ? 'linear-gradient(180deg,rgba(50, 50, 50, 0.9),rgba(60, 60, 60, 0.8))'
      : 'linear-gradient(180deg,rgba(70, 70, 70, 0.8),rgba(30, 30, 30, 0.9))'};
`
