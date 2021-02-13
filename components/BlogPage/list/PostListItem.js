import Link from 'next/link'
import styled from 'styled-components'
// import { Tags } from './Tags'
// import slugifyText from '../Utils.js'

export default function PostListItem({
  slug,
  date,
  title,
  summary,
}) {
  return (
    <SPostListItem id={`SPostListItem_${slug}`} className='post-list-item'>
      <h2>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>
      {/* <Tags tags={tags} /> */}
      <p className='summary'>
        <Link href={`/blog/${slug}`}>
          <a>{summary}</a>
        </Link>
      </p>
      <p className='date'>{date}</p>
    </SPostListItem>
  )
}

const SPostListItem = styled.li`
  width: 90%;
  max-width: 600px;
  margin: 0 auto 5vh auto;
  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  h2 {
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
    @media only screen and (max-width: 800px) {
      font-size: 25px;
    }
    a {
      color: var(--title);
      :visited {
        color: var(--titlegrey);
      }
    }
  }
  .summary {
    margin: 10px 0;
    font-weight: 350;
    overflow: hidden;
    a {
      color: var(--whitegreen);
      :visited {
        color: var(--fadedgreen);
      }
    }
  }
  .date {
    font-size: 12px;
  }
`
