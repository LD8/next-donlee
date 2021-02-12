import Head from 'next/head'
import styled from 'styled-components'
import { SKILLS } from '../consts'
import Skill from './Skill'

export const AboutPage = () => {
  return (
    <SMyInfo id='SMyInfo'>
      <Head>
        <title>About Peiwen Li</title>
      </Head>

      <section className='info-section'>
        <div className='my-portrait'>
          <img src='/portrait.png' alt='my portrait' />
        </div>
        <div className='my-info'>
          <h2>Peiwen Li</h2>
          <h4>Full-stack Developer</h4>
          <p>
            Passionate in developing software that brings happiness and light
            into our lives
          </p>
        </div>
      </section>

      <section className='skill-section'>
        <ul>
          {SKILLS.map((i, index) => (
            <Skill
              key={i.skill}
              skill={i.skill}
              percentage={i.percentage}
              index={index}
            />
          ))}
        </ul>
      </section>
    </SMyInfo>
  )
}

const SMyInfo = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 700px;
  .info-section {
    width: 100%;
    margin: 4rem auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .my-portrait {
      display: flex;
      justify-content: center;
      width: 40%;
      @media only screen and (max-width: 800px) {
        width: 100%;
      }
      img {
        width: 50%;
        height: 50%;
        max-width: 200px;
        border-radius: 20%;
        box-shadow: 3px 3px 0 rgba(10, 5, 30, 0.8);
        background-image: linear-gradient(
          45deg,
          rgba(230, 210, 200, 1),
          rgba(200, 220, 220, 0.8)
        );
        filter: contrast(1.9);
      }
    }
    .my-info {
      width: 60%;
      text-align: left;
      color: var(--title);
      text-shadow: 3px 3px 0 rgba(10, 5, 30, 0.8);
      font-weight: 400;
      h2 {
        text-transform: uppercase;
        margin-bottom: 5px;
        font-size: calc(2vmin + 25px);
      }
      h4,
      p {
        margin: 0 0 20px 5px;
      }
      p {
        margin-bottom: 0;
      }
      @media only screen and (max-width: 800px) {
        width: calc(100vw - 8px);
        text-align: center;
        h2 {
          margin: 20px 0 5px 0;
        }
        h4,
        p {
          margin: 0 10px 10px;
        }
      }
    }
  }
  .skill-section {
    width: 90%;
    margin: 0 20px 40px 20px;
    ul {
      width: 100%;
      max-width: 680px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`
