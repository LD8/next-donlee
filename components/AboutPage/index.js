import Head from 'next/head'
import styled from 'styled-components'
import ImageAndInfo from './ImageAndInfo'
import Skills from './Skills'
import useRefToSetHeight from '@/lib/useRefToSetHeight'

export const AboutPage = () => {
  const ref = useRefToSetHeight()
  return (
    <SMyInfo id='SMyInfo' ref={ref}>
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
  min-height: 800px;
`
