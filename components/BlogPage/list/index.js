import useRefToSetHeight from '@/lib/useRefToSetHeight'
import Head from 'next/head'
import styled from 'styled-components'
import PostListItem from './PostListItem'

export const PostList = ({ postsData }) => {
  // console.log('postsData: ', postsData)
  // TODO: 分页
  // TODO: 标签查询 filter postsData
  // TODO: 全局 input 搜索
  const ref = useRefToSetHeight()
  return (
    <SBlog id='SBlog' ref={ref}>
      <Head>
        <title>Peiwen Li's Blog</title>
      </Head>

      <section className='brief'>
        <h3>Search</h3>
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
  padding: 4vh 0;
  @media only screen and (max-width: 400px) {
    max-width: 350px;
  }
  .brief {
    margin-bottom: 5vh;
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
