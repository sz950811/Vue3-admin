/**
 * 针对 localStorage/sessionStorage 的操作
 */
export default {
  local: {
    getItem(key: string) {
      return JSON.parse(window.localStorage.getItem(key) as any);
    },
    setItem(key: string, value: any) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key: string) {
      window.localStorage.removeItem(key);
    },
    clear() {
      window.localStorage.clear();
    }
  },
  session: {
    getItem(key: string) {
      return JSON.parse(window.sessionStorage.getItem(key) as any);
    },
    setItem(key: string, value: any) {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key: string) {
      window.sessionStorage.removeItem(key);
    },
    clear() {
      window.sessionStorage.clear();
    }
  }
};
