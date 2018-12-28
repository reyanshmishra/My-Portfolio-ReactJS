export function getFooterColor(path) {
  if (path === '/' || path === '') {
    return 'white'
  } else {
    return 'black'
  }
}

export function getNavigationColor(path) {
  const width = window.innerWidth
  if (path === '/' && width > 766) {
    return 'transparent'
  } else {
    return 'black'
  }
}

export function getBrandName(path) {
  if (path === '/' || path === '') {
    return 'Welcome'
  } else if (path === '/aboutme') {
    return 'About Me'
  } else {
    return (
      path
        .replace('/', '')
        .charAt(0)
        .toUpperCase() + path.slice(2)
    )
  }
}

export * from './constants'
