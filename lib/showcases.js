import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { toMMMMYYYY } from './utils'

const contentDir = path.resolve('content/showcases')
const assetsDir = path.resolve('public/showcases')

const getAllFileNames = () =>
  fs.readdirSync(contentDir).filter((name) => name !== '.DS_Store')

export const getAllShowcaseSlugs = () =>
  getAllFileNames().map((fileName) => ({
    params: { slug: fileName.replace(/\.yml$/, '') },
  }))

/**
 * slug is file name without extension
 */
export const getShowcase = (slug) => {
  const { data } = parseYmlFrontMatter(contentDir, `${slug}.yml`)
  return {
    slug,
    ...data,
    imgSrcArr: getImgSrcArr(assetsDir, slug),
    startedAt: toMMMMYYYY(data.startedAt),
    endedAt: toMMMMYYYY(data.endedAt),
  }
}

export const getAllShowcases = () =>
  getAllFileNames().map((fileName) => {
    const slug = fileName.replace(/\.yml$/, '')
    const { data } = parseYmlFrontMatter(contentDir, fileName)
    return {
      slug,
      imgSrcArr: getImgSrcArr(assetsDir, slug),
      title: data.title,
      badges: data.badges,
    }
  })

function getImgSrcArr(assetsDir, slug) {
  return fs
    .readdirSync(path.join(assetsDir, slug))
    .filter((name) => name !== '.DS_Store')
    .map((imgName) => `/showcases/${slug}/${imgName}`)
}

function parseYmlFrontMatter(contentDir, fileName) {
  return matter.read(path.join(contentDir, fileName))
}
