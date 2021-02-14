import { PostDetail } from '@/components'
import { getAllPostSlugs, getPostData } from '@/lib/posts'

export default function PostDetailPage(props) {
  return <PostDetail {...props} />
}

export async function getStaticPaths() {
  // Return a list of possible value for id/slug
  return {
    paths: getAllPostSlugs(),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the detail page using params.slug
  return {
    props: {
      ...(await getPostData(params.slug)),
    },
  }
}
