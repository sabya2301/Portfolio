const year = new Date().getFullYear();

const footer = document.querySelector(".site-footer");
if (footer) {
  const firstLine = footer.querySelector("p");
  if (firstLine) {
    firstLine.textContent = `Built by Sabyasachi Das. © ${year}`;
  }
}

const homeLink = document.getElementById("homeLink");
if (homeLink) {
  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const contactModal = document.getElementById("contactModal");
const viewContactBtn = document.getElementById("viewContactBtn");
const closeContactBtn = document.getElementById("closeContactBtn");

viewContactBtn.addEventListener("click", () => {
  contactModal.classList.add("active");
});

closeContactBtn.addEventListener("click", () => {
  contactModal.classList.remove("active");
});

contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove("active");
  }
});
