import React from 'react'
import styled from 'styled-components'
import Icon  from './Icon'

const icons = [
  {
    name: 'Email',
    imageSource: '/svg/At.svg',
    altText: 'Email address: Mail to Peiwen Li at don_lee@me.com',
    href: 'mailto: don_lee@me.com',
  },
  {
    name: 'CV',
    imageSource: '/svg/CV.svg',
    altText: 'CV/Resumé of Peiwen Li, click to view',
    href: '',
  },
  {
    name: 'Github',
    imageSource: '/svg/AtGithub.svg',
    altText: 'Github account of Peiwen Li',
    href: 'https://github.com/LD8',
  },
]

export default function Footer() {
  return (
    <SFooter id='SFooter'>
      {icons.map((i, index) => (
        <Icon
          key={index}
          name={i.name}
          imageSource={i.imageSource}
          altText={i.altText}
          index={index}
          href={i.href}
        />
      ))}
    </SFooter>
  )
}

const SFooter = styled.footer`
  position: sticky;
  top: 100%;
  width: 100%;
  height: 15vh;
  min-height: 170px;
  max-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color:rgb(220, 225, 200); */
  background-image: linear-gradient(
    90deg,
    rgb(40, 46, 41),
    rgba(140, 143, 141, 0.8),
    rgb(40, 46, 41)
  );
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      margin: 0 calc(1vw + 20px);
      padding: 0;

      img {
        height: 40px;
        @media only screen and (max-width: 800px) {
          height: 35px;
        }
      }
    }
    p {
      /* font-family: "Lobster", cursive; */
      margin-top: 10px;
      font-size: small;
      a {
        color: rgb(220, 220, 220);
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`
