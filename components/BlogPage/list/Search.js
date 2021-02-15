import styled from 'styled-components'

export default function Search({ v, set }) {
  return (
    // TODO: push query to paths
    <SInput
      value={v}
      onChange={(e) => set(e.target.value.toLowerCase())}
      placeholder='Search'
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
  margin:0 1rem;
  :focus {
    border-bottom: 1px solid silver;
  }
`
