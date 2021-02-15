import { ShowcaseList } from '../../components'
import { getAllShowcases } from '../../lib/showcases'

export default function ShowcaseListPage(props) {
  return <ShowcaseList {...props} />
}

export async function getStaticProps() {
  return {
    props: { showcases: getAllShowcases() },
  }
}
