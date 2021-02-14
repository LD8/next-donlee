import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { toMMMMYYYY } from './utils'

const showcaseDir = path.resolve('content/showcases')

const getAllFileNames = () =>
  fs.readdirSync(showcaseDir).filter((name) => name !== '.DS_Store')

export const getAllShowcaseSlugs = () =>
  getAllFileNames().map((fileName) => ({
    params: { slug: fileName.replace(/\.yml$/, '') },
  }))

/**
 * slug is file name without extension
 */
export const getShowcase = async (slug) => {
  const filePath = path.join(showcaseDir, `${slug}.yml`)
  // const fileContents = fs.readFileSync(filePath, 'utf8')
  const parsed = matter.read(filePath)
  return {
    slug,
    ...parsed.data,
  }
}

export const getAllShowcases = () =>
  getAllFileNames().map((fileName) => {
    const slug = fileName.replace(/\.yml$/, '')
    const filePath = path.join(showcaseDir, fileName)
    // const fileContents = fs.readFileSync(filePath, 'utf8')
    const parsed = matter.read(filePath)

    return {
      slug,
      ...parsed.data,
      startedAt: toMMMMYYYY(parsed.data.startedAt),
      endedAt: toMMMMYYYY(parsed.data.endedAt),
    }
  })
