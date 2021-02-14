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
export const latestFirst = (a, b) =>
  moment(a.date, 'MMM DD, YYYY').isAfter(moment(b.date), 'MMM DD, YYYY')
    ? -1
    : 1

/**
 * @input '2021-01'
 * @output 'January 2021'
 */
export const toMMMMYYYY = (str) => {
  const result = moment(str, 'YYYY-MM-DD')
  return result.isValid() ? result.format('MMMM YYYY') : str
}
