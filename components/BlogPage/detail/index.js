import { useRefToSetHeight } from '@/lib/hooks'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styled from 'styled-components'
import Tags from '../components/Tags'
// import renderers from "./codeRenderers";

export const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={tomorrow}
        language={language}
        children={value}
        customStyle={{ fontSize: '0.75rem' }}
      />
    )
  },
}

export const PostDetail = ({ slug, title, tags, date, content }) => {
  const ref = useRefToSetHeight()
  // TODO: double scroll optimization
  // TODO: slow render optimization
  return (
    // <SPostDetail id='SPostDetail' ref={ref}>
    <SPostDetail id='SPostDetail'>
      <Head>
        <title>Blog - {title}</title>
      </Head>
      <div ref={ref} />
      <h1 className='title'>{title}</h1>
      <Tags tags={tags} />
      <ReactMarkdown
        className='content'
        renderers={renderers}
        children={content}
      />
      <p className='date'>{date}</p>
    </SPostDetail>
  )
}

const SPostDetail = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.3rem;
  /* background-color: rgb(60, 65, 60);
  box-shadow: inset 0px -20px 20px rgb(170, 170, 170); */
  @media only screen and (max-width: 800px) {
    max-width: 95vw;
  }
  .title {
    padding-bottom: 15px;
    text-align: center;
    font-size: calc(1vmin + 25px);
    color: white;
    font-weight: 500;
    border-bottom: 2px solid grey;
  }
  .content {
    overflow: scroll;
    margin: 1rem 0;
    line-height: 1.5rem;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: white;
      font-weight: 600;
      margin: 1rem 0;
      line-height: 2rem;
      code {
        font-size: 1rem;
      }
    }
    img {
      margin: 1rem 0;
      border-radius: 8px;
      box-shadow: 0 0 8px black;
      width: 100%;
    }
    blockquote {
      padding-left: 20px;
      border-left: 5px solid rgb(90, 90, 90);
      border-radius: 4px;
    }
    p {
      margin: 2vh 0;
    }
    pre {
      border-radius: 0.25rem;
      border: 1px solid rgb(90, 90, 90);
      box-shadow: inset -1.5px -3px 6px rgb(130, 135, 130);
      margin-bottom: 20px !important;
    }
    code {
      font-family: Courier, monospace;
      color: var(--code-text-color);
      background-color: var(--code-bg-color);
      padding: 0 0.5rem 0.1rem 0.5rem;
      border-radius: 0.25rem;
      font-size: small;
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
    margin-top: 15px;
    text-align: right;
    letter-spacing: 0.1em;
    font-size: 15px;
  }
`
