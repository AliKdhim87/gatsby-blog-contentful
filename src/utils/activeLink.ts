import {useLocation} from '@reach/router'

export const activeLink = (path: string): boolean => {
  const {pathname} = useLocation()
  return path === pathname
}
