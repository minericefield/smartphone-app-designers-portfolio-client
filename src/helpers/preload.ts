// https://user-first.ikyu.co.jp/entry/preload-images

const supportsPreload = (() => {
  try {
    return document.createElement('link').relList.supports('preload')
  } catch (e) {
    return false
  }
})()

const preload = (href: string, as: string) => {
  if (!supportsPreload) return

  const link = document.createElement('link')
  link.setAttribute('rel', 'preload')
  link.setAttribute('as', as)
  link.setAttribute('href', href)
  link.onload = () => document.head.removeChild(link)
  document.head.appendChild(link)
}

export const preloadImage = (href: string) => {
  preload(href, 'image')
}
