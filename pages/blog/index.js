import { PostList } from '../../components'
import { getSortedPostsData } from '../../lib/posts'

export default function BlogListPage(props) {
  return <PostList {...props} />
}

export async function getStaticProps() {
  return {
    props: { ...getSortedPostsData() },
  }
}
