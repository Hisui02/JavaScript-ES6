const getCookie = (name) => {
  const cookies = document.cookie;
  cookies.trim();

  const cookieStartIndex = cookies.indexOf(name);

  if (cookieStartIndex == -1) return; // The cookie does not exist

  let cookie = cookies.substring(cookieStartIndex);
  let cookieEndIndex = cookie.indexOf(";");

  if (cookieEndIndex != -1) cookie = cookie.substring(0, cookieEndIndex);

  const value = cookie.substring(cookie.indexOf("=") + 1);

  return decodeURIComponent(value);
};
