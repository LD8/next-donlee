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
  min-height: 700px;
`
