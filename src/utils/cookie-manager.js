import cookieCutter from 'cookie-cutter'
import { v4 as uuidv4 } from 'uuid'

const CookieName = 'seattle-birth-doulas-user'

export function userCookie() {
  let cookie = cookieCutter.get(CookieName)

  if (!cookie) {
    const uuid = uuidv4()
    cookie = cookieCutter.set(CookieName, uuid)
  }

  return cookie
}
