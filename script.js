const year = new Date().getFullYear();

const footer = document.querySelector(".site-footer");
if (footer) {
  const firstLine = footer.querySelector("p");
  if (firstLine) {
    firstLine.textContent = `Built by Sabyasachi Das. © ${year}`;
  }
}
