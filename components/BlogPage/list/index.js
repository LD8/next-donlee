import { useQuery, useRefToSetHeight } from '@/lib/hooks'
import { contain } from '@/lib/utils'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import Tags from '../components/Tags'
import Pagination from './Pagination'
import PostListItem from './PostListItem'
import Search from './Search'

export const PostList = ({ postsData, allTags }) => {
  const ref = useRefToSetHeight()
  const { page, size, tag, search } = useQuery()
  const [posts, setPosts] = useState(postsData)
  const resetInputRef = useRef()

  useEffect(() => {
    let result = postsData
    if (tag) {
      result = result.filter(({ tags }) => contain(tags, tag))
    }
    if (search) {
      result = result.filter(
        ({ title, summary, tags }) =>
          contain(title, search) ||
          contain(summary, search) ||
          contain(tags, search),
      )
    }
    setPosts(result)
  }, [search, tag])

  const transitions = useTransition([posts], null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' },
  })

  return (
    <SBlog id='SBlog' ref={ref}>
      <Head>
        <title>Peiwen Li's Blog</title>
      </Head>

      <section className='all-tags'>
        <Tags tags={allTags} />
      </section>

      <section className='brief'>
        <div className='search'>
          <h3>Search</h3>
          <Search resetInputRef={resetInputRef} />
          <Link
            href={{
              pathname: '/blog',
              query: { page: 1, size, tag: null, search: null },
            }}
          >
            <SBtn onClick={resetInputRef.current}>clear</SBtn>
          </Link>
        </div>
        <div className='result'>
          <span>
            {search || tag ? 'Search result: ' : 'Total posts: '} {posts?.length}
          </span>
        </div>
      </section>

      {transitions.map(({ item: posts, props, key }) => (
        <animated.div key={key} style={props}>
          <section className='posts'>
            <ul>
              {posts?.slice((page - 1) * size, page * size).map((p) => (
                <PostListItem key={p.slug} {...p} />
              ))}
            </ul>
          </section>

          <Pagination total={posts?.length} />
        </animated.div>
      ))}
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
  section.all-tags {
    margin-bottom: 1rem;
  }
  section.brief {
    width: 90%;
    margin: 0 auto 1rem auto;
    div.search {
      display: flex;
      h3 {
        text-align: right;
        padding-right: 0.5rem;
        width: 30%;
        font-size: small;
        line-height: 30px;
        font-weight: 400;
        @media only screen and (max-width: 800px) {
          font-size: 20px;
          line-height: 25px;
        }
      }
    }
    div.result {
      display: flex;
      span {
        width: 40%;
        font-size: small;
        width: 30%;
        margin: 0 auto;
        padding-top: 0.5rem;
        font-style: italic;
        text-align: center;
      }
    }
  }
  section.posts {
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

const SBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 0.25rem;
  color: silver;
  padding: 0.1rem 1rem;
  margin-left: 1rem;
  outline: none;
`
