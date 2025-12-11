import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL = '' } = {}) => {
  // If src is already a full URL (starts with http)
  if (src.startsWith('http://') || src.startsWith('https://')) {
    // Transform Cloudinary URLs to custom domain
    if (src.includes('res.cloudinary.com')) {
      // Extract the path starting from /image/upload/
      const match = src.match(/\/image\/upload\/(.+)/)
      if (match) {
        const customDomain = baseURL || 'https://media.shecanhike.com'
        return {
          url: `${customDomain}/image/upload/${match[1]}`
        }
      }
    }

    // For other full URLs, return as-is
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
