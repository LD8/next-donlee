import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { toMMMMYYYY, latestShowcaseFirst } from './utils'

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
  let startedAt = toMMMMYYYY(data.startedAt)
  const endedAt = toMMMMYYYY(data.endedAt)
  if (startedAt.split(' ')[1] === endedAt.split(' ')[1]) {
    startedAt = startedAt.split(' ')[0]
  }
  return {
    slug,
    ...data,
    imgSrcArr: getImgSrcArr(assetsDir, slug),
    startedAt,
    endedAt,
  }
}

export const getAllShowcases = () => {
  let allBadges = []
  const showcases = getAllFileNames()
    .map((fileName) => {
      const slug = fileName.replace(/\.yml$/, '')
      const { data } = parseYmlFrontMatter(contentDir, fileName)
      if (data.badges) {
        allBadges.push(...data.badges)
      }
      return {
        slug,
        imgSrcArr: getImgSrcArr(assetsDir, slug),
        title: data.title,
        badges: data.badges,
        endedAt: data.endedAt,
      }
    })
    .sort(latestShowcaseFirst)
  return { showcases, allBadges: [...new Set(allBadges)] }
}

function getImgSrcArr(assetsDir, slug) {
  return fs
    .readdirSync(path.join(assetsDir, slug))
    .filter((name) => name !== '.DS_Store')
    .map((imgName) => `/showcases/${slug}/${imgName}`)
}

function parseYmlFrontMatter(contentDir, fileName) {
  return matter.read(path.join(contentDir, fileName))
}
