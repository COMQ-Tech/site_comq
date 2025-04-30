// ----- Header -----

// Configuração de seletores como constantes para melhor performance
const DOM_ELEMENTS = {
  header: document.querySelector(".header"),
  menuToggle: document.querySelector(".menu-toggle"),
  nav: document.querySelector(".navh"),
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
  DOM_ELEMENTS.nav.classList.toggle("active")
  DOM_ELEMENTS.menuToggle.classList.toggle("active")

  // Acessibilidade: atualiza o aria-label do botão
  const isExpanded = DOM_ELEMENTS.menuToggle.classList.contains("active")
  DOM_ELEMENTS.menuToggle.setAttribute("aria-expanded", isExpanded)
  DOM_ELEMENTS.menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Fechar menu" : "Abrir menu"
  )
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
