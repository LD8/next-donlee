import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

export default function NotFound() {
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
  max-width: 1000px;
  height: 90vh;
  @media only screen and (max-width: 800px) {
    height: 93vh;
  }
  position: relative;
  top: 7vh;
  left: 50%;
  border-radius: 5px;
  color: silver;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  background-image: linear-gradient(
    180deg,
    rgba(40, 43, 41, 0.8),
    rgba(40, 43, 41, 0.9)
  );
  h3 {
    font-weight: 500;
  }
  p {
    margin: 4vh 2vw;
  }
`
