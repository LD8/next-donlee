import { ShowcaseDetail } from '@/components'
import { getAllShowcaseSlugs, getShowcase } from '@/lib/showcases'

export default function ShowcaseDetailPage(props) {
  return <ShowcaseDetail {...props} />
}

export async function getStaticPaths() {
  // Return a list of possible value for id/slug
  return {
    paths: getAllShowcaseSlugs(),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the detail page using params.slug
  return {
    props: {
      ...getShowcase(params.slug),
    },
  }
}
