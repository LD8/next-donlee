// import App from 'next/app'
// import { useRouter } from 'next/router'
import React from 'react'
import { animated, useTransition } from 'react-spring'
import { Layout } from '../components'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  const transitions = useTransition([Component], (c) => c, {
    from: {
      opacity: 0,
      position: 'relative',
      top: 0,
      transform: 'translate3d(100%,0,0)',
    },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  const aniMain = transitions.map(({ item: Component, props, key }) => (
    <animated.div key={key} style={props}>
      <Component {...pageProps} />
    </animated.div>
  ))
  return <Layout>{aniMain}</Layout>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext) => {
//   // console.log('appContext: ', appContext)
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)
//   // console.log('appProps: ', appProps)
//   return { ...appProps }
// }
