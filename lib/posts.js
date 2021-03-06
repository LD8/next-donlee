import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { extractDateFromSlug, getTagArr, latestPostFirst } from './utils'

const postsDirectory = path.resolve('content/posts')

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
    tags: getTagArr(parsed.data.tags),
    date: extractDateFromSlug(slug),
    content: parsed.content,
  }
}

export const getSortedPostsData = () => {
  let allTags = []
  const postsData = getAllFileNames()
    .map((fileName) => {
      const date = extractDateFromSlug(fileName)
      const slug = fileName.replace(/\.md$/, '')

      const filePath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf8')

      /**
       * use gray-matter to parse the post metadata section
       *
       * parsed result format
       * {
       *   content: '\nThis is content.',
       *   data: {
       *     title: 'Front Matter'
       *   }
       * }
       */
      const parsed = matter(fileContents)

      const tags = getTagArr(parsed.data.tags)
      allTags.push(...tags)

      return {
        slug,
        date,
        title: parsed.data.title || slug.slice(11),
        summary: parsed.data.summary || parsed.content.slice(0, 150) + '...',
        tags,
      }
    })
    .sort(latestPostFirst)

  return { postsData, allTags: [...new Set(allTags.filter((t) => t !== ''))] }
}
