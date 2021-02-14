import styled from 'styled-components'

export default function Resources({ links }) {
  return (
    <section>
      <h2>Resources</h2>
      <ul>
        {links.online && (
          <li>
            <SSpan>Visit the website:</SSpan>
            <a href={links.online}>{links.online.toUpperCase()}</a>
          </li>
        )}
        {links.github && (
          <li>
            <SSpan>GitHub source files:</SSpan>
            <a href={links.github}>{links.github.toUpperCase()}</a>
          </li>
        )}
        {links.codesandbox && (
          <li>
            <SSpan>Code-Sandbox:</SSpan>
            <a href={links.codesandbox}>PORTAL HERE</a>
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
