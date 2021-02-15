import { useContext, useRef, useEffect } from 'react'
import { mainDivHeightContext } from '../components'

/**
 * use main's children's height to set main div's height
 *
 * because main's parent is absolute position
 */
export default function useRefToSetHeight() {
  const ref = useRef()
  const setHeight = useContext(mainDivHeightContext)
  useEffect(() => {
    setHeight(ref.current.offsetHeight)
  })
  return ref
}
