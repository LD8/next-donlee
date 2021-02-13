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
export const getTagArr = (tags) => tags?.split(',').map((s) => s.trim()) || ['']
