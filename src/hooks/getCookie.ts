import Cookie from "js-cookie";

export const getCookie = (cookieName: string) => {
    Cookie.get(cookieName)
}