import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

export const PageNotFound = () => {
  return (
    <S404 id='S404'>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h3>Oops! 404 page not found</h3>
      <p>Please click any other link on the page</p>
    </S404>
  )
}

const S404 = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 500;
  }
  p {
    margin: 4vh 2vw;
  }
`
