import Head from 'next/head'
import styled from 'styled-components'
import ImageAndInfo from './ImageAndInfo'
import Skills from './Skills'

export const AboutPage = () => {
  return (
    <SMyInfo id='SMyInfo'>
      <Head>
        <title>About Peiwen Li</title>
      </Head>
      <ImageAndInfo />
      <Skills />
    </SMyInfo>
  )
}

const SMyInfo = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 4rem 0;
  @media only screen and (max-width: 1200px) {
    margin: 3rem 0;
  }
`
