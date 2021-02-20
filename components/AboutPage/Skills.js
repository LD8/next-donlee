import styled from 'styled-components'
import { SKILLS } from '../consts'
import Skill from './Skill'

export default function Skills() {
  return (
    <SSkillSection id='SSkillSection'>
      <ul>
        {SKILLS.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))}
      </ul>
    </SSkillSection>
  )
}

const SSkillSection = styled.section`
  width: 90%;
  margin: 4rem auto;
  ul {
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
