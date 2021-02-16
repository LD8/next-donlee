import { useQuery } from '@/lib/hooks'
import Link from 'next/link'
import styled from 'styled-components'

export default function Tags({ tags }) {
  const { size, search, tag } = useQuery()

  // TODO: optimization, tag clicked to many rerenders of postList page
  // console.log(tag)

  return (
    <STagUl id='tags'>
      {tags &&
        tags[0] &&
        tags.map((t) => {
          return (
            <li key={t}>
              <Link
                href={{
                  pathname: '/blog',
                  query: { tag: t.toLowerCase(), page: 1, size, search },
                }}
              >
                <STagBtn selected={t.toLowerCase() === tag}>{t}</STagBtn>
              </Link>
            </li>
          )
        })}
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
    /* height: 20px; */
    margin: 0.25rem;
    /* padding: 0px 10px; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* color: white; */
    /* font-size: 12px; */
    /* border-radius: 3px; */
    /* background-color: var(--titlegrey); */
  }
`

const STagBtn = styled.button`
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? 'var(--fadedgreen)' : 'transparent'};
  border-radius: 0.2rem;
  color: silver;
  padding: 0.18rem 0.9rem;
  outline: none;
  border: none;
  border: 1px solid var(--fadedgreen);
  transition: all 0.1s ease-in-out;
  :hover {
    background-color: var(--fadedgreen);
  }
`
