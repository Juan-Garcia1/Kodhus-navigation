const header = document.querySelector("header")
const nav = document.querySelector(".cdt-top-nav")

window.addEventListener("scroll", function() {
  let scrollPos = this.pageYOffset
  const headerHeight = header.clientHeight
  if (scrollPos >= headerHeight - 60) {
    nav.classList.add("active")
  } else {
    nav.classList.remove("active")
  }
})
