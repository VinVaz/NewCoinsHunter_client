const slugify = (text) =>
  Text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')

export { slugify }
