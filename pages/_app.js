import { animated, useTransition } from 'react-spring'
import { Layout } from '../components'
import '../styles/global.scss'

const noTransitionPaths = ['/cv', '/cv-zh', '/something-else']

export default function MyApp({ Component, pageProps, router }) {
  const { pathname } = router
  const noTransition = noTransitionPaths.includes(pathname)

  const transitions = useTransition([Component], null, {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
    },
    update: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
    },
    leave: {
      opacity: 0,
      position: 'absolute',
      transform: 'translate3d(-100%,0,0)',
    },
  })

  return noTransition ? (
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
