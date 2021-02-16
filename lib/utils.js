import moment from 'moment'

/**
 * @input '2020-01-01-Notes.md'
 * @output 'Jan 01, 2020'
 */
export const extractDateFromSlug = (slug) =>
  moment(slug.slice(0, 10), 'YYYY-MM-DD').format('MMM DD, YYYY')

/**
 * @input 'React, Django'
 * @output ["React", "Django"]
 */
export const getTagArr = (tags) => tags?.split(' ').map((s) => s.trim()) || ['']

/**
 * @input <'Jan 01, 2020'>[]
 * @output [ latest dates bubbling up ]
 */
export const latestPostFirst = (a, b) => {
  if (moment(a.date, 'MMM DD, YYYY').isBefore(moment(b.date, 'MMM DD, YYYY'))) {
    return 1
  }
  return -1
}

/**
 * @input <'2020-01'>[]
 * @output [ latest dates bubbling up ]
 */
export const latestShowcaseFirst = (a, b) => {
  if (moment(a.endedAt, 'YYYY-MM').isBefore(moment(b.endedAt, 'YYYY-MM'))) {
    return 1
  }
  return -1
}

/**
 * @input '2021-01' 'YYYY-MM'
 * @output 'January 2021'
 */
export const toMMMMYYYY = (str) => {
  const result = moment(str, 'YYYY-MM')
  return result.isValid() ? result.format('MMMM YYYY') : str
}

/**
 * see if an Array or a string contains v
 */
export function contain(obj, v) {
  if (Array.isArray(obj)) {
    // when obj is <tags>[]
    return obj.some((s) => s.toLowerCase().includes(v))
  }
  // otherwise obj is a string
  return obj.toLowerCase().includes(v)
}

export function debounce(fn, wait = 500) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(fn, wait, ...args)
  }
}
