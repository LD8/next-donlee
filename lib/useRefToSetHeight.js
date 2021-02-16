import { useContext, useRef, useEffect } from 'react'
import { mainDivHeightContext } from '../components'
import { debounce } from './utils'

/**
 * use main's children's height to set main div's height
 *
 * because main's parent is absolute position
 */
export default function useRefToSetHeight() {
  const ref = useRef()
  const setHeight = useContext(mainDivHeightContext)

  // when page rerenders
  useEffect(() => {
    setHeight(ref.current.offsetHeight)
  })

  // when window resizes
  useEffect(() => {
    window.onresize = debounce(() => setHeight(ref.current.offsetHeight), 300)
    return () => {
      window.onresize = null
    }
  }, [ref.current?.offsetHeight])

  return ref
}
