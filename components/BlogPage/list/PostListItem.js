import Link from 'next/link'
import styled from 'styled-components'
import Tags from '../components/Tags'

export default function PostListItem({ slug, date, title, summary, tags }) {
  return (
    <SPostLi id={`SPostLi_${slug}`}>
      <h2>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>
      <Tags tags={tags} />
      <p className='summary'>
        <Link href={`/blog/${slug}`}>
          <a>{summary}</a>
        </Link>
      </p>
      <p className='date'>{date}</p>
    </SPostLi>
  )
}

const SPostLi = styled.li`
  width: 90%;
  max-width: 600px;
  margin: 1rem auto 3rem auto;
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
    margin: 1rem 0;
    font-weight: 350;
    overflow: hidden;
    a {
      color: var(--whitegreen);
      :visited {
        color: var(--titlegrey);
      }
    }
  }
  .date {
    font-size: 15px;
  }
`
