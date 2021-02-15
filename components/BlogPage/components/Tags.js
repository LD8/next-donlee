import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@/lib/utils'

export default function Tags({ tags }) {
  const { size } = useQuery()
  // const {
  //   query: { page = 1, size = 5, tag = null },
  // } = useRouter()

  return (
    <STagUl id='tags'>
      {tags &&
        tags[0] &&
        tags.map((tag) => (
          <li key={tag}>
            <Link
              href={{
                pathname: '/blog',
                query: { tag: tag.toLowerCase(), page: 1, size },
              }}
            >
              <a>{tag}</a>
            </Link>
          </li>
        ))}
    </STagUl>
  )
}

const STagUl = styled.ul`
  margin: 0.5rem 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    height: 20px;
    margin: 0.25rem 0.25rem;
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
    border-radius: 3px;
    background-color: var(--titlegrey);
  }
`
