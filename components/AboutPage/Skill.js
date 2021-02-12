import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

export default function Skill({ skillName, percentage }) {
  const width = useSpring({
    number: percentage,
    from: { number: 0 },
    delay: 300,
    config: config.gentle,
  }).number.interpolate((n) => `${n.toFixed()}%`)

  return (
    <SSkill id={`SSkill_${skillName}`}>
      <div className='skill-name'>{skillName}</div>
      <div className='skill-length'>
        <animated.div className='fill' style={{ width }} />
        <animated.div className='percentage'>{width}</animated.div>
      </div>
    </SSkill>
  )
}

const SSkill = styled.li`
  margin: 0 auto;
  width: 100%;
  margin: 10px 0 10px 20px;
  font-size: calc(1vmin + 8px);
  display: flex;
  justify-content: center;
  --skill-name-width: calc(3vw + 60px);
  @media only screen and (max-width: 800px) {
    margin: 6px 0;
  }
  @media only screen and (max-width: 400px) {
    padding-right: 20px;
  }

  .skill-name {
    width: var(--skill-name-width);
    text-align: right;
    padding-right: 1vw;
    text-shadow: 2px 2px 0 rgba(10, 5, 30, 0.8);
  }

  .skill-length {
    display: flex;
    align-items: center;
    width: calc(100% - var(--skill-name-width));
    max-width: 600px;
    .fill {
      width: 100%;
      height: 20%;
      border-radius: 3px;
      background-image: linear-gradient(
        90deg,
        rgba(0, 50, 110, 0.2),
        rgb(95, 255, 180)
      );
      box-shadow: 3px 3px 0 rgba(10, 5, 30, 0.3);
    }
    .percentage {
      font-size: smaller;
      padding-left: 10px;
    }
  }
`
