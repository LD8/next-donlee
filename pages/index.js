import { useRefToSetHeight } from '@/lib/hooks'

export default function Home() {
  const ref = useRefToSetHeight()
  return <div id="Home" ref={ref} />
}
