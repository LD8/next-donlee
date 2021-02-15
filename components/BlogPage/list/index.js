import useRefToSetHeight from '@/lib/useRefToSetHeight'
import { contain, useQuery } from '@/lib/utils'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Tags from '../components/Tags'
import Pagination from './Pagination'
import PostListItem from './PostListItem'
import Search from './Search'
import { useRouter } from 'next/router'

export const PostList = ({ postsData, allTags }) => {
  // console.log('postsData: ', postsData)
  // console.log('allTags: ', allTags)
  const ref = useRefToSetHeight()
  const { page, size, tag } = useQuery()
  // const {
  //   query: { page = 1, size = 5, tag = null },
  // } = useRouter()
  console.log(page,size,tag)

  const [searchV, setSearchV] = useState('')
  const [posts, setPosts] = useState(postsData)
  useEffect(() => {
    // debounce
    const timer = setTimeout(() => {
      // console.log('debounce')
      setPosts(
        postsData.filter(
          ({ title, summary, tags }) =>
            contain(title, searchV) ||
            contain(summary, searchV) ||
            contain(tags, searchV),
        ),
      )
    }, 300)
    // everytime searchV changes within 300ms (vs last change), timer will be cleared
    return () => clearTimeout(timer)
  }, [searchV])

  useEffect(() => {
    let taggedPosts = postsData
    if (tag) {
      // console.log('tag ran')
      taggedPosts = postsData.filter(({ tags }) => contain(tags, tag))
      // console.log(taggedPosts)
      setSearchV('')
    }
    setPosts(taggedPosts)
  }, [tag])

  return (
    <SBlog id='SBlog' ref={ref}>
      <Head>
        <title>Peiwen Li's Blog</title>
      </Head>

      <section className='all-tags'>
        <Tags tags={allTags} />
      </section>

      <section className='brief'>
        <h3>Search</h3>
        <Search v={searchV} set={setSearchV} />
        <Link
          href={{
            pathname: '/blog',
            query: { page, size },
          }}
        >
          <button onClick={() => setSearchV('')}>clear</button>
        </Link>
        {(searchV || tag) && <span>Result: {posts?.length}</span>}
      </section>

      <section className='posts'>
        <ul>
          {posts &&
            posts
              .slice((page - 1) * size, page * size)
              .map((p) => <PostListItem key={p.slug} {...p} />)}
        </ul>
      </section>

      <Pagination total={posts?.length} />
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
  .all-tags {
    margin-bottom: 1rem;
  }
  .brief {
    width: 90%;
    margin: 0 auto 2rem auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h3 {
      text-align: right;
      width: 30%;
      font-size: small;
      line-height: 30px;
      font-weight: 400;
      @media only screen and (max-width: 800px) {
        font-size: 20px;
        line-height: 25px;
      }
    }
    span {
      font-size: small;
      width: 30%;
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
