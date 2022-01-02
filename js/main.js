// DOM DOCUMENT OBJECT MODEL
/* abrir e fechar o meni ao clicar no ícone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// esconder o menu ao clicar em algum link
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// ScrollReveal: Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #contact .text, #contact .links
  footer .brand, footer .social
  #technologies .techs swiper, #technologies .text
  `,
  { inverval: 100 }
)

/* mudar o header da página no scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  // scroll maior que a altura do header
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    // menor que a altura do herader
    header.classList.remove('scroll')
  }
}

// button back to top
const topButton = document.querySelector('.top-button')
function backToTop() {
  if (window.scrollY >= 500) {
    topButton.classList.add('show')
  } else {
    topButton.classList.remove('show')
  }
}

//swiper
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  mousewheel: true,
  keyboard: true
})

// menu ativo de acordo com a seção visível
const sections = document.querySelectorAll('main section[id]')
function activateMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// when scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenu()
})
