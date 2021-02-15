import useRefToSetHeight from '@/lib/useRefToSetHeight'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import PostListItem from './PostListItem'
import Pagination from './Pagination'

export const PostList = ({ postsData }) => {
  const ref = useRefToSetHeight()
  const {
    query: { page = 1, size = 5 },
  } = useRouter()

  // console.log('postsData: ', postsData)
  // TODO: 标签查询 filter postsData
  // TODO: 全局 input 搜索

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
          {postsData?.slice((page - 1) * size, page * size).map((p) => (
            <PostListItem key={p.slug} {...p} />
          ))}
        </ul>
      </section>

      <Pagination total={postsData?.length} />
    </SBlog>
  )
}

const SBlog = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 4vh 0;
  @media only screen and (max-width: 800px) {
    max-width: 94vw;
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
