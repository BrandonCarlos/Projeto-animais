export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  
  tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver)
  })

  function onMouseOver(event) {
    console.log(event);
    const tooltipBox = criarTooltipBox(this)//this = referencia ao item clicado no caso o mapa
    this.addEventListener('mouseleave', onMouseLeave);//<- passando um OBJETO
    //que terá um método HANDLEEVENT() <- OBRIGATÓRIO
    onMouseLeave.tooltipBox = tooltipBox;//passando para a propriedade tooltipBox
    // a const tooltipBox
    
    onMouseLeave.element = this;
    this.addEventListener('mousemove', onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;
  }
  
  const onMouseLeave = {
    // tooltipBox: '', // <- lembrando que não precisamos declarar a propriedade
    // element: '', //aqui podemos somente CRIA-LA 
    handleEvent() {//este evento "handleEvent()" é obrigatório
      this.tooltipBox.remove();//<- com esse ".remove" já remove do DOM
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }
  
  const onMouseMove = {
    handleEvent(event) {//passando "event" aqui pq vou precisar pegar a
      //COORDENADA do meu mouse
      this.tooltipBox.style.top = `${event.pageY + 20}px`;//20px a mais para a caixa aparecer um pouco distante do meu MOUSE
      this.tooltipBox.style.left = `${event.pageX + 20}px`; 

    }
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  // Mouseover -> quando eu passo o mouse por cima do elemento

}