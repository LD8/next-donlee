import Head from 'next/head'
import useRefToSetHeight from '@/lib/useRefToSetHeight'

export const ShowcaseList = () => {
  const ref = useRefToSetHeight()
  return (
    <div ref={ref}>
      <Head>
        <title>Peiwen Li's Portfolio</title>
      </Head>
      <Placeholder />
    </div>
  )
}

function Placeholder() {
  return (
    <>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
      <p>Placeholder content</p>
    </>
  )
}
