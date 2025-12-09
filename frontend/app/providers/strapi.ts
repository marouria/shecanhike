import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL = '' } = {}) => {
  // If src is already a full URL (starts with http), return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return {
      url: src
    }
  }

  // For relative URLs, prepend the Strapi base URL
  const strapiUrl = joinURL(baseURL as string, src)

  return {
    url: strapiUrl
  }
}
