import useRefToSetHeight from '@/lib/useRefToSetHeight'

export default function Home() {
  const ref = useRefToSetHeight()
  return <div ref={ref} />
}

// export const getStaticProps = async () => ({ props: {} })
