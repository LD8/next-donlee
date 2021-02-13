export const BlogList = ({ postsData }) => {
  // console.log('postsData: ', postsData)
  return (
    <ul>
      {postsData && postsData.map(({ slug, title, date }) => (
        <li key={slug}>
          {title} {date}
        </li>
      ))}
    </ul>
  )
}
