console.log("COMQ!");

// ROLAGEM DA PÁGINA - ALTERA A COR DO HEADER
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// MENU HAMBÚRGUER - ABRIR E FECHAR
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".navh");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }
});

