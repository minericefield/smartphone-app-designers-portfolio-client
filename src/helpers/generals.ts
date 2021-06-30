export const getOs = (userAgent: string) => {
  const lowerCasedUserAgent = userAgent.toLowerCase()
  if (lowerCasedUserAgent.includes('win')) {
    return 'win'
  } else if (lowerCasedUserAgent.includes('mac')) {
    return 'mac'
  } else {
    return 'unknown'
  }
}

export const getBrowser = (userAgent: string) => {
  const lowerCasedUserAgent = userAgent.toLowerCase()
  if (lowerCasedUserAgent.includes('trident')) {
    return 'ie' // Maybe we can't care about ie currently https://stackoverflow.com/questions/64836337/using-vue-3-in-ie11
  } else if (lowerCasedUserAgent.includes('edge')) {
    return 'edge'
  } else if (lowerCasedUserAgent.includes('chrome')) {
    return 'chrome'
  } else if (lowerCasedUserAgent.includes('safari')) {
    return 'safari'
  } else if (lowerCasedUserAgent.includes('firefox')) {
    return 'firefox'
  } else if (lowerCasedUserAgent.includes('opera')) {
    return 'opera'
  } else {
    return 'unknown'
  }
}

// https://dev.to/itsabdessalam/detect-current-device-type-with-javascript-490j
export const getDeviceType = (userAgent: string) => {
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return 'tablet'
  } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
    return 'mobile'
  } else {
    return 'desktop'
  }
}
