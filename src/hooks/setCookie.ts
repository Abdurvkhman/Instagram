import Cookie from "js-cookie";

export const setCookie = (cookieName: string, user: string) => {
    Cookie.set(cookieName, user)
}