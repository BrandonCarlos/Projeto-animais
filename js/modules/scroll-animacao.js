export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.4;//60% da altura da tela

    function animaScroll() {
      // precisamos saber a distancia de cada elemento que está do TOPO
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        // console.log(sectionTop);

        if (isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      })
    }

    // pelo menos vamos animar uma vez um elemento na tela
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

console.log(`Scroll animação carregou`);