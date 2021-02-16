import styled from 'styled-components'
import Badge from './Badge'

/**
 * @param passIndex only on card back, displaying in order
 * @param isClicked display all badges by default, isClicked => false then does not display badges
 */
export default function BadgeUl({
  badges,
  passIndex = false,
  isClicked = true,
  asFilter = false,
  ...props
}) {
  return (
    <SBadgeUl {...props}>
      {badges?.map((badgeName, i) => (
        <Badge
          key={badgeName}
          badgeName={badgeName}
          isClicked={isClicked}
          index={passIndex ? i : 0}
          asFilter={asFilter}
        />
      ))}
    </SBadgeUl>
  )
}

const SBadgeUl = styled.ul`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
