import useRefToSetHeight from '@/lib/useRefToSetHeight'
import Head from 'next/head'
import styled from 'styled-components'
import PostListItem from './PostListItem'

export const PostList = ({ postsData }) => {
  // console.log('postsData: ', postsData)
  const ref = useRefToSetHeight()
  return (
    <SBlog id='SBlog' ref={ref}>
      <Head>
        <title>Peiwen Li's Blog</title>
      </Head>

      <section className='brief'>
        <h3>Posts about my life and work.</h3>
      </section>

      <section className='posts'>
        <ul>
          {postsData &&
            postsData.map((p) => <PostListItem key={p.slug} {...p} />)}
        </ul>
      </section>
    </SBlog>
  )
}

const SBlog = styled.div`
  width: 100%;
  max-width: 600px;
  /* z-index: 10; */
  .brief {
    margin: 3vh 0 5vh 0;
    h3 {
      text-align: center;
      font-size: 25px;
      line-height: 30px;
      font-weight: 400;
      @media only screen and (max-width: 800px) {
        font-size: 20px;
        line-height: 25px;
      }
    }
  }
  .posts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ul {
      list-style: none;
      width: 100%;
      text-align: center;
    }
  }
`
