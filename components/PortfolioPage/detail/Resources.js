import styled from 'styled-components'
import { ExternalLink } from '../../ExternalLink'

export default function Resources({ links }) {
  return (
    <section>
      <h2>Resources</h2>
      <ul>
        {links.online && (
          <li>
            <SSpan>Visit the website:</SSpan>
            <SAnchor href={links.online}>{links.online}</SAnchor>
          </li>
        )}
        {links.github && (
          <li>
            <SSpan>GitHub source files:</SSpan>
            <SAnchor href={links.github}>{links.github}</SAnchor>
          </li>
        )}
        {links.codeSandbox && (
          <li>
            <SSpan>Code-Sandbox:</SSpan>
            <SAnchor href={links.codeSandbox}>Portal Here</SAnchor>
          </li>
        )}
      </ul>
    </section>
  )
}

const SSpan = styled.span`
  width: 200px;
  padding-right: 20px;
`
const SAnchor = styled(ExternalLink)`
  text-transform: uppercase;
  font-size: smaller;
`
