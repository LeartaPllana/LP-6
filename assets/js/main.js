function myMenuFunction() {
  const menu = document.getElementById("navMenu");
  const isResponsive = menu.classList.contains("responsive");

  if (isResponsive) {
    menu.classList.remove("responsive");
  } else {
    menu.classList.add("responsive");
  }
}
