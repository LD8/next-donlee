import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '../../../lib/hooks'

export default function Search({ resetInputRef }) {
  const router = useRouter()
  const { page, size, tag } = useQuery()
  const [searchV, setSearchV] = useState('')
  resetInputRef.current = () => setSearchV('')

  return (
    <SInput
      value={searchV}
      onChange={(e) => setSearchV(e.target.value.toLowerCase())}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          router.push({
            pathname: '/blog',
            query: { page, size, tag, search: searchV },
          })
        }
      }}
      placeholder='Search a key word'
    />
  )
}

const SInput = styled.input`
  background-color: transparent;
  border-radius: 3px;
  border: none;
  font-size: big;
  font-weight: 500;
  border-bottom: 1px solid grey;
  color: silver;
  text-align: center;
  height: 30px;
  width: 40%;
  outline: none;
  :focus {
    border-bottom: 1px solid silver;
  }
`
