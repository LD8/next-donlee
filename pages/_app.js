import { animated, config, useTransition } from 'react-spring'
import { Layout } from '../components'
import '../styles/global.css'

export default function MyApp({ Component, pageProps, router }) {
  const { pathname } = router
  const isCVPage = pathname === '/cv' || pathname === '/cv-zh'

  const transitions = useTransition([Component], (c) => c, {
    from: {
      opacity: 0,
      position: 'absolute',
      transform: 'translate3d(100%,0,0)',
    },
    enter: {
      opacity: 1,
      position: 'absolute',
      transform: 'translate3d(0%,0,0)',
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      transform: 'translate3d(-100%,0,0)',
    },
    config: config.gentle,
  })

  return isCVPage ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      {transitions.map(({ item: Component, props, key }) => (
        <animated.div key={key} style={props}>
          <Component {...pageProps} />
        </animated.div>
      ))}
    </Layout>
  )
}
