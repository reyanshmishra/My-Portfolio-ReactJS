export function getFooterColor(path) {
  if (path === '/' || path === '') {
    return 'white'
  }
  return 'black'
}

export function getNavigationColor(path) {
  const width = window.innerWidth
  if (path === '/' && width > 766) {
    return 'transparent'
  }
  return 'black'
}

export function getBrandName(path) {
  if (path === '/' || path === '') {
    return 'Welcome'
  }
  if (path === '/aboutme') {
    return 'About Me'
  }
  return (
    path
      .replace('/', '')
      .charAt(0)
      .toUpperCase() + path.slice(2)
  )
}
