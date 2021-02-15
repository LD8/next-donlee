import styled from 'styled-components'

export default function Resources({ links }) {
  return (
    <section>
      <h2>Resources</h2>
      <ul>
        {links.online && (
          <li>
            <SSpan>Visit the website:</SSpan>
            <SLink href={links.online}>{links.online}</SLink>
          </li>
        )}
        {links.github && (
          <li>
            <SSpan>GitHub source files:</SSpan>
            <SLink href={links.github}>{links.github}</SLink>
          </li>
        )}
        {links.codeSandbox && (
          <li>
            <SSpan>Code-Sandbox:</SSpan>
            <SLink href={links.codeSandbox}>Portal Here</SLink>
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
const SLink = styled.a`
  text-transform: uppercase;
  font-size: smaller
`
