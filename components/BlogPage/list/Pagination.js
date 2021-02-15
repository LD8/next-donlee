import Pagination from 'next-pagination'
import styles from './pagination.module.scss'

export default function CustomedPagination ({ total }) {
  return <Pagination total={total} sizes={[5, 10]} theme={styles} />
}
