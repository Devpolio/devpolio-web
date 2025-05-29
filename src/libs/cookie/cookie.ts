import cookie from "js-cookie";

class Cookie {
  public getCookie(key: string) {
    if (cookie.get(key) !== undefined) {
      return cookie.get(key);
    }
  }

  public setCookie(key: string, value: string) {
    cookie.set(key, value);
  }

  public removeCookie(key: string) {
    cookie.remove(key);
  }
}

export default new Cookie();
