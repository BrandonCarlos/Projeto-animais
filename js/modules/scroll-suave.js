export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] ul li a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',//para alinhar exatamente no TOPO
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)//scroll para section do link
  })
}

console.log('Scroll suave carregou');
