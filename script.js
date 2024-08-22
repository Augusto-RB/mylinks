function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-lightCORRETO.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatarCORRETO.png")
  }

  /* 
tag img, se tiver 'light' - add img light. else - add img normal
*/
}
