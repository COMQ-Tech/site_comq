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

// ----- Modais de Parceiros -----

// Dados dos parceiros
const partnersData = {
  woman: {
    name: "Woman",
    logo: "./images/logo-woman.png",
    description: "Organização dedicada ao empoderamento feminino através da educação e oportunidades profissionais. Trabalhamos para criar um ambiente inclusivo onde mulheres possam desenvolver todo seu potencial.",
    details: [
      "<strong>Área de atuação:</strong> Empoderamento feminino e educação",
      "<strong>Parceria desde:</strong> 2024",
      "<strong>Projetos em conjunto:</strong> Workshops de capacitação, mentorias"
    ]
  },
  despertar: {
    name: "Despertar",
    logo: "./images/logo-despertar.png",
    description: "Projeto focado no desenvolvimento de jovens através da cultura, arte e educação. Acreditamos no poder transformador da expressão artística e cultural.",
    details: [
      "<strong>Área de atuação:</strong> Cultura, arte e educação",
      "<strong>Parceria desde:</strong> 2024",
      "<strong>Projetos em conjunto:</strong> Oficinas culturais, eventos artísticos"
    ]
  },
  convergencia: {
    name: "Mulheres Convergência",
    logo: "./images/mulheres-convergencia.png",
    description: "Rede de apoio e desenvolvimento para mulheres empreendedoras. Promovemos conexões, capacitação e oportunidades de negócio para mulheres que desejam empreender.",
    details: [
      "<strong>Área de atuação:</strong> Empreendedorismo feminino",
      "<strong>Parceria desde:</strong> 2024",
      "<strong>Projetos em conjunto:</strong> Encontros mensais de empreendedoras, networking"
    ]
  },
  tingua: {
    name: "Sabão Tinguá",
    logo: "./images/sabao-tingua.png",
    description: "Projeto de produção sustentável de sabão artesanal, gerando renda para a comunidade local e promovendo práticas ambientalmente responsáveis.",
    details: [
      "<strong>Área de atuação:</strong> Produção sustentável e geração de renda",
      "<strong>Parceria desde:</strong> 2024",
      "<strong>Projetos em conjunto:</strong> Capacitação em produção artesanal"
    ]
  },
  social: {
    name: "Projeto Social",
    logo: "./images/projeto-social.png",
    description: "Iniciativa voltada para o desenvolvimento social da comunidade através de ações educativas, culturais e de apoio às famílias em situação de vulnerabilidade.",
    details: [
      "<strong>Área de atuação:</strong> Desenvolvimento social comunitário",
      "<strong>Parceria desde:</strong> 2024",
      "<strong>Projetos em conjunto:</strong> Ações sociais, apoio familiar"
    ]
  },
  solo: {
    name: "Solo",
    logo: "./images/solo.png",
    description: "Organização focada no desenvolvimento sustentável e agricultura urbana, promovendo segurança alimentar e práticas ecológicas na comunidade.",
    details: [
      "<strong>Área de atuação:</strong> Agricultura urbana e sustentabilidade",
      "<strong>Parceria desde:</strong> 2024",
      "<strong>Projetos em conjunto:</strong> Hortas comunitárias, educação ambiental"
    ]
  }
}

// Elementos do modal
const modal = document.getElementById("partner-modal")
const modalClose = document.querySelector(".partner-modal-close")
const modalLogo = document.getElementById("modal-partner-logo")
const modalName = document.getElementById("modal-partner-name")
const modalDescription = document.getElementById("modal-partner-description")
const modalDetails = document.getElementById("modal-partner-details")

// Função para abrir modal
function openPartnerModal(partnerId) {
  const partner = partnersData[partnerId]

  if (!partner) return

  // Preencher conteúdo do modal
  modalLogo.src = partner.logo
  modalLogo.alt = `${partner.name} Logo`
  modalName.textContent = partner.name
  modalDescription.textContent = partner.description

  // Limpar e preencher detalhes
  modalDetails.innerHTML = ""
  partner.details.forEach(detail => {
    const li = document.createElement("li")
    li.innerHTML = detail
    modalDetails.appendChild(li)
  })

  // Mostrar modal
  modal.classList.add("active")
  document.body.style.overflow = "hidden" // Prevenir scroll
}

// Função para fechar modal
function closePartnerModal() {
  modal.classList.remove("active")
  document.body.style.overflow = "" // Restaurar scroll
}

// Event listeners para cards de parceiros
document.addEventListener("DOMContentLoaded", () => {
  const partnerCards = document.querySelectorAll(".cards-images[data-partner]")

  partnerCards.forEach(card => {
    card.addEventListener("click", () => {
      const partnerId = card.getAttribute("data-partner")
      openPartnerModal(partnerId)
    })

    // Acessibilidade: permitir abertura com Enter/Space
    card.setAttribute("tabindex", "0")
    card.setAttribute("role", "button")
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        const partnerId = card.getAttribute("data-partner")
        openPartnerModal(partnerId)
      }
    })
  })

  // Fechar modal ao clicar no X
  if (modalClose) {
    modalClose.addEventListener("click", closePartnerModal)
  }

  // Fechar modal ao clicar fora do conteúdo
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closePartnerModal()
      }
    })
  }

  // Fechar modal com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closePartnerModal()
    }
  })
})
