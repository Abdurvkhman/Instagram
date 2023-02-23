import Cookie from "js-cookie";

export const removeCookie = (cookieName: string) => {
    Cookie.remove(cookieName)
}