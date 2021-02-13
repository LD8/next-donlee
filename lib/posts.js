import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.resolve('content/posts')
// console.log(postsDirectory)

const getAllFileNames = () =>
  fs.readdirSync(postsDirectory).filter((name) => name !== '.DS_Store')

export const getAllPostSlugs = () =>
  getAllFileNames().map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }))

export const getPostData = async (slug) => {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(fileContents)
  return {
    slug,
    title: parsed.data.title || slug.slice(11),
    date: slug.slice(0, 10),
    content: parsed.content,
  }
}

export const getSortedPostsData = () =>
  getAllFileNames()
    .map((fileName) => {
      const date = fileName.slice(0, 10)
      const slug = fileName.replace(/\.md$/, '')

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
        title: parsed.data.title || slug.slice(11),
        summary: parsed.data.summary || parsed.content.slice(0, 120) + '...',
      }
    })
    .sort((a, b) => {
      // latest date first
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
