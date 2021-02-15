import useRefToSetHeight from '@/lib/useRefToSetHeight'
import Head from 'next/head'
import styled from 'styled-components'
import Showcase from './components/Showcase'

export const ShowcaseList = ({ showcases }) => {
  const ref = useRefToSetHeight()

  return (
    <SShowcase id='SShowcase' ref={ref}>
      <Head>
        <title>Peiwen Li's Portfolio</title>
      </Head>

      <section className='brief'>
        <h3>
          From React.JS and UI/UX animations to Python and Django backend
          support. Check out my latest web software development portfolio
          projects.
        </h3>
      </section>

      <section className='badges'>
        <p>Click a label for related projects</p>
        {/* <ul> */}
        {/* TODO: badges */}
        {/* {badges.map(({ name: label, id }, index) => (
            <Link
              key={index}
              to={`${url}/showcases/badges/${id}/${slugifyText(label)}`}
            >
              <TechLabelSwitch label={label} id={id} />
            </Link>
          ))} */}
        {/* </ul> */}
      </section>

      <section className='showcases'>
        {showcases?.map((showcase) => (
          <Showcase key={showcase.slug} {...showcase} />
        ))}
      </section>
    </SShowcase>
  )
}

const SShowcase = styled.div`
  max-width: 1000px;
  .brief {
    padding: 3vh 0 5vh 0;
    h3 {
      line-height: 30px;
      font-weight: 400;
      font-size: 25px;
      text-align: center;
      @media only screen and (max-width: 800px) {
        line-height: 25px;
        font-size: 20px;
      }
    }
  }
  .badges {
    margin: 0 auto 3vh auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: smaller;
      margin-bottom: 8px;
    }
    ul {
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
    }
  }
  .showcases {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 5vh;
  }
`
