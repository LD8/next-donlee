import { BlogList } from '@/components'
import { getSortedPostsData } from '@/lib/posts'

export default function BlogListPage(props) {
  return <BlogList {...props} />
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const postsData = getSortedPostsData()

  // The value of the `props` key will be passed to the component
  return {
    props: { postsData },
  }
}
