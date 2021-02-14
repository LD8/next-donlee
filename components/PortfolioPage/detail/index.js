import useRefToSetHeight from '@/lib/useRefToSetHeight'
import Head from 'next/head'
import styled from 'styled-components'
import Carousel from './Carousel'
import Resources from './Resources'

export const ShowcaseDetail = ({
  slug,
  title,
  summary,
  imgSrcArr,
  content,
  techs,
  links,
  startedAt,
  endedAt,
  badges,
}) => {
  const ref = useRefToSetHeight()
  // TODO: to make this server side code
  return (
    <SCaseDetail id='SCaseDetail' ref={ref}>
      <Head>
        <title>{title}</title>
      </Head>

      <div className='intro'>
        <h1>{title}</h1>
        <p>{summary}</p>
        <Carousel imgSrcArr={imgSrcArr} />
      </div>

      <section className='about'>
        <h2>About this project</h2>
        {content && content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        <p className='dates'>
          Project duration: {'  '}
          <span>{startedAt}</span> - <span>{endedAt}</span>
        </p>
      </section>

      <section className='technical-sheet'>
        <h2>Technical Sheet</h2>
        <ul>{techs && techs.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
      </section>

      {links && Object.keys(links).length !== 0 && <Resources links={links} />}
    </SCaseDetail>
  )
}

const SCaseDetail = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem 1rem;
  @media only screen and (max-width: 400px) {
    max-width: 350px;
  }
  .intro {
    margin-bottom: 2rem;
    h1 {
      font-weight: 500;
      margin-bottom: 1vh;
    }
    p {
      margin-bottom: 2vh;
    }
  }
  h2 {
    font-weight: 400;
    border-bottom: 1px solid grey;
    padding-bottom: 1vh;
    margin-bottom: 1vh;
  }
  section {
    margin-bottom: 4vh;
    line-height: 30px;
  }
  section.about {
    p {
      padding-bottom: 2vh;
    }
    .dates {
      font-size: smaller;
      text-align: left;
    }
  }
  ul {
    margin: 0 20px;
    list-style: circle;
  }
  a {
    color: orangered;
    :hover {
      color: greenyellow;
    }
    :visited {
      color: green;
      :hover {
        color: greenyellow;
      }
    }
  }
`
