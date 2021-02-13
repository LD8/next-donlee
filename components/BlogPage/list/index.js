import Head from 'next/head'
import useRefToSetHeight from '@/lib/useRefToSetHeight'

export const BlogList = ({ postsData }) => {
  // console.log('postsData: ', postsData)
  const ref = useRefToSetHeight()
  return (
    <div ref={ref}>
      <Head>
        <title>Peiwen Li's Blog</title>
      </Head>
      <ul>
        {postsData &&
          postsData.map(({ slug, title, date }) => (
            <li key={slug}>
              {title} {date}
            </li>
          ))}
      </ul>
    </div>
  )
}
