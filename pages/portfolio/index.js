import { ShowcaseList } from '../../components'
import { getAllShowcases } from '../../lib/showcases'

export default function ShowcaseListPage(props) {
  return <ShowcaseList {...props} />
}

export async function getStaticProps() {
  // console.log(getAllShowcases())
  return {
    props: { showcases: getAllShowcases() },
  }
}
