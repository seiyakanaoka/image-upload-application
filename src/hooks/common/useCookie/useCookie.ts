interface UseCookie {
  getCookie: (key: string) => string | undefined;
  setCookie: (key: string, value: string) => void;
}

export const useCookie = (): UseCookie => {
  const getCookie = (key: string): string | undefined => {
    const cookieValues = document.cookie.split(';');
    const cookieValue = cookieValues.find((row) => row.startsWith(key));
    return cookieValue?.split('=')[1];
  };

  const setCookie = (key: string, value: string) => {
    document.cookie = `${key}=${value}`;
  };

  return {
    getCookie,
    setCookie,
  };
};
