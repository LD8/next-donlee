import styled from 'styled-components'
import Head from 'next/head'
// import { Tags } from './Tags'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import useRefToSetHeight from '@/lib/useRefToSetHeight'

export const PostDetail = ({ slug, title, date, content }) => {
  const ref = useRefToSetHeight()
  return (
    <SPostDetail id='SPostDetail' ref={ref}>
      <Head>
        <title>Blog - {title}</title>
      </Head>
      <h1 className='title'>{title}</h1>
      <hr />
      <p className='date'>{date}</p>
      {/* <Tags tags={tags} /> */}
      {/* <ReactMarkdown
        source={content}
        renderers={{ code: CodeBlock }}
        className='content'
      /> */}
      <div dangerouslySetInnerHTML={{ __html: content }} className='content' />
    </SPostDetail>
  )
}

const SPostDetail = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 5vh 10px;
  .title {
    margin-bottom: 1vh;
    text-align: center;
    font-size: calc(1vmin + 25px);
    color: white;
    font-weight: 500;
  }
  .content {
    overflow: hidden;
    margin: 1vh 0;
    line-height: 2em;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: white;
      font-weight: 600;
      margin: 2vh 0;
    }
    img {
      margin: 2vh 0;
      border-radius: 8px;
      box-shadow: 0 0 8px black;
    }
    blockquote {
      padding-left: 20px;
      border-left: 5px solid rgba(170, 165, 190, 0.5);
      border-radius: 4px;
    }
    p {
      margin: 2vh 0;
    }
    pre {
      border-radius: 10px;
      border: 1.5px solid rgb(90, 90, 90);
      box-shadow: inset -1.5px -3px 6px rgba(170, 165, 190, 0.5);
      margin-bottom: 20px !important;
    }
    code {
      font-family: Courier, monospace;
      color: yellow;
      font-size: 16px;
    }
    a {
      color: orangered;
      :hover {
        color: greenyellow;
      }
    }
    ul,
    ol {
      padding: 0 10px;
      li {
        margin: 0 10px 10px 10px;
      }
    }
  }
  .date {
    text-align:center;
    margin-top: 20px;
    font-size: 12px;
  }
`
