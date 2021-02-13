import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.resolve('content/posts')
// console.log(postsDirectory)

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }))
}

export const getPostData = (slug) => {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(fileContents)
  return {
    slug,
    title: parsed.data.title,
    date: slug.slice(0, 10),
    content: parsed.content,
  }
}

export const getSortedPostsData = () => {
  // get file names
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // get post date
    const date = fileName.slice(0, 10)
    // remove '.md' extension from file name
    const slug = fileName.replace(/\.md$/, '')
    const slugTitle = slug.slice(11)

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
      summary: parsed.data.summary || parsed.content.slice(0, 120) + '...',
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

// class FileNameProcessor {
//   constructor(fileName, fileOrigin) {
//     // fileName example:
//     // '2019-12-24-Blog-Hosted-on-GitHub-Pages-with-Subdirectory.md'
//     this.fileName = fileName
//     this.fileOrigin = fileOrigin
//   }
//   getDate() {
//     return this.fileName.slice(0, 10)
//   }
//   getSlugTitle() {
//     return this.fileName.slice(11).replace(/\.md$/, '')
//   }
//   getSlug() {
//     return this.getSlugTitle() + '-' + date
//   }
// }
