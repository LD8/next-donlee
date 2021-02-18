import { useRouter } from 'next/router'
import { useContext, useRef, useEffect, useLayoutEffect } from 'react'
import { mainDivHeightContext } from '../components'
import { debounce } from './utils'

export const useQuery = () => {
  const {
    query: { page = 1, size = 5, tag = null, search = '' },
  } = useRouter()
  return { page, size, tag, search }
}

/**
 * fix useLayoutEffect warning when server side rendering
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * use main's children's height to set main div's height
 *
 * because main's parent is absolute position
 */
export function useRefToSetHeight() {
  const ref = useRef()
  const setHeight = useContext(mainDivHeightContext)

  // when page rerenders
  useIsomorphicLayoutEffect(() => {
    setHeight(ref.current.scrollHeight)
  })

  // when window resizes
  useEffect(() => {
    window.onresize = debounce(() => setHeight(ref.current.scrollHeight), 300)
    return () => {
      window.onresize = null
    }
  }, [ref.current?.scrollHeight])

  return ref
}
