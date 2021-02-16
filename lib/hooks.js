import { useRouter } from 'next/router'

export const useQuery = () => {
  const {
    query: { page = 1, size = 5, tag = null, search = '' },
  } = useRouter()
  return { page, size, tag, search }
}
