// ----- Header -----

// Configuração de seletores como constantes para melhor performance
const DOM_ELEMENTS = {
  header: document.querySelector(".header"),
  menuToggle: document.querySelector(".menu-toggle"),
  menuIcon: document.querySelector(".menu-icon"),
  nav: document.querySelector(".navh"),
  menuOverlay: document.querySelector(".menu-overlay"),
  body: document.body,
}

// Função para manipulação do header durante o scroll
const handleScroll = () => {
  const scrollThreshold = 50
  if (window.scrollY > scrollThreshold) {
    DOM_ELEMENTS.header.classList.add("scrolled")
  } else {
    DOM_ELEMENTS.header.classList.remove("scrolled")
  }
}

// Função para manipulação do menu hambúrguer
const toggleMenu = () => {
  const isActive = DOM_ELEMENTS.nav.classList.toggle("active")
  DOM_ELEMENTS.menuToggle.classList.toggle("active")
  DOM_ELEMENTS.menuOverlay.classList.toggle("active")

  // Mudar ícone entre hambúrguer e X
  if (DOM_ELEMENTS.menuIcon) {
    DOM_ELEMENTS.menuIcon.innerHTML = isActive ? "&#10005;" : "&#9776;"
  }

  // Prevenir scroll do body quando menu está aberto
  if (isActive) {
    DOM_ELEMENTS.body.classList.add("menu-open")
  } else {
    DOM_ELEMENTS.body.classList.remove("menu-open")
  }

  // Acessibilidade: atualiza o aria-label do botão
  DOM_ELEMENTS.menuToggle.setAttribute("aria-expanded", isActive)
  DOM_ELEMENTS.menuToggle.setAttribute(
    "aria-label",
    isActive ? "Fechar menu" : "Abrir menu"
  )
}

// Função para fechar o menu ao clicar no overlay
const closeMenuOnOverlayClick = () => {
  if (DOM_ELEMENTS.nav.classList.contains("active")) {
    toggleMenu()
  }
}

// Função para fechar o menu ao clicar em um link
const closeMenuOnLinkClick = () => {
  if (DOM_ELEMENTS.nav.classList.contains("active")) {
    toggleMenu()
  }
}

// Inicialização do código quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  // Verifica se os elementos existem antes de adicionar event listeners
  if (DOM_ELEMENTS.header) {
    window.addEventListener("scroll", handleScroll)

    // Executa uma vez no carregamento para verificar estado inicial
    handleScroll()
  }

  if (DOM_ELEMENTS.menuToggle && DOM_ELEMENTS.nav) {
    DOM_ELEMENTS.menuToggle.addEventListener("click", toggleMenu)

    // Inicializa atributos ARIA para acessibilidade
    DOM_ELEMENTS.menuToggle.setAttribute("aria-expanded", "false")
    DOM_ELEMENTS.menuToggle.setAttribute("aria-controls", "main-navigation")
    DOM_ELEMENTS.nav.setAttribute("id", "main-navigation")

    // Fechar menu ao clicar no overlay
    if (DOM_ELEMENTS.menuOverlay) {
      DOM_ELEMENTS.menuOverlay.addEventListener("click", closeMenuOnOverlayClick)
    }

    // Fechar menu ao clicar em links de navegação
    const navLinks = DOM_ELEMENTS.nav.querySelectorAll("a")
    navLinks.forEach(link => {
      link.addEventListener("click", closeMenuOnLinkClick)
    })
  }
})

// Boa prática: Remove event listeners quando não forem mais necessários
window.addEventListener("beforeunload", () => {
  if (DOM_ELEMENTS.header) {
    window.removeEventListener("scroll", handleScroll)
  }

  if (DOM_ELEMENTS.menuToggle) {
    DOM_ELEMENTS.menuToggle.removeEventListener("click", toggleMenu)
  }

  if (DOM_ELEMENTS.menuOverlay) {
    DOM_ELEMENTS.menuOverlay.removeEventListener("click", closeMenuOnOverlayClick)
  }
})

// ----- Carrossel -----
const track = document.querySelector(".carrossel-track")
const btnLeft = document.querySelector(".carrossel-btn.left")
const btnRight = document.querySelector(".carrossel-btn.right")

let scrollAmount = 0
const cardWidth = track.querySelector(".card-parceiros").offsetWidth + 16
const maxScroll = track.scrollWidth - track.offsetWidth

function updateScroll() {
  track.style.transform = `translateX(-${scrollAmount}px)`
}

btnLeft.addEventListener("click", () => {
  scrollAmount = Math.max(scrollAmount - cardWidth, 0)
  updateScroll()
})

btnRight.addEventListener("click", () => {
  scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll)
  updateScroll()
})
