const eraseCookie = (name) => {
  let expirationDate = new Date();
  expirationDate.setTime(0);
  const cookie =
    name + "=" + ";expires=" + expirationDate + ";path=/;SameSite=Strict;"; // Omitting Secure attribute for developing purposes

  document.cookie = cookie;
};
