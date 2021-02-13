import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.resolve('content/posts')
// console.log(postsDirectory)

export const getSortedPostsData = () => {
  // get file names
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // fileName example: 2019-12-24-Blog-Hosted-on-GitHub-Pages-with-Subdirectory.md
    // get post date
    const date = fileName.slice(0, 10)
    // remove '.md' extension from file name
    const slugTitle = fileName.slice(11).replace(/\.md$/, '')
    const slug = slugTitle + '-' + date

    // reade md file as string
    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // use gray-matter to parse the post metadata section
    /**
     * parsed format
     * {
        content: '\nThis is content.',
        data: { 
          title: 'Front Matter' 
        } 
      }
     */
    const parsed = matter(fileContents)

    // combine the parsed data with slug
    return {
      slug,
      date,
      title: parsed.data.title || slugTitle,
      summary: parsed.data.summary || '',
    }
  })

  // sort posts by date
  return allPostsData.sort((a, b) => {
    // latest date first
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
