const setCookie = (name, value, minutes) => {
  let expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + minutes * 60 * 1000); // adding minutes
  expirationDate.toUTCString();

  name = encodeURIComponent(name);
  value = encodeURIComponent(value);

  const cookie =
    name +
    "=" +
    value +
    ";expires=" +
    expirationDate +
    ";path=/;SameSite=Strict;"; // Omitting Secure attribute for developing purposes

  document.cookie = cookie;
};
