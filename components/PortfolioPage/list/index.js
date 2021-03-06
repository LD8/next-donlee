import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import BadgeUl from './components/BadgeUl'
import Showcase from './components/Showcase'

export const ShowcaseList = ({ showcases = [], allBadges = [] }) => {
  const {
    query: { badge = null },
  } = useRouter()
  const [finalShowcases, set] = useState(showcases)

  useEffect(() => {
    if (badge) {
      return set(showcases.filter((s) => s.badges.includes(badge)))
    }
    set(showcases)
  }, [badge])

  const transitions = useTransition([finalShowcases], null, {
    from: { opacity: 0 },
    update: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' },
    config: { duration: 200 },
  })
  return (
    <SShowcaseList id='SShowcaseList'>
      <Head>
        <title>Peiwen Li's Portfolio</title>
      </Head>

      <section className='brief'>
        <h3>
          Portfolio projects: From JS frameworks and UX optimization to Python
          backend support
        </h3>
      </section>

      <section className='badges'>
        <p>Click a label for related projects</p>
        <BadgeUl badges={allBadges} asFilter />
      </section>

      {transitions.map(({ item: finalShowcases, props, key }) => (
        <animated.section key={key} style={props} className='showcases'>
          {finalShowcases?.map((showcase) => (
            <Showcase key={showcase.slug} {...showcase} />
          ))}
        </animated.section>
      ))}
    </SShowcaseList>
  )
}

const SShowcaseList = styled.div`
  max-width: 1000px;
  .brief {
    padding: 1rem 0 2rem 0;
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
  }
  .showcases {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 5vh;
  }
`
