import slugifyFunction from 'slugify'

export const slugify = (tag) => {
  return slugifyFunction(tag, {
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false // strip special characters except replacement, defaults to `false`
  })
}

export default slugify
