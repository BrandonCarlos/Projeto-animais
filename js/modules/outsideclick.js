export default function outsideClick(element, events, callback) {//ao executar está função
  const outside = 'data-outside';
  //a function debaixo também é executada
  const html = document.documentElement;//html

  if (!element.hasAttribute(outside)) {//se não tiver o [data-outside]
    events.forEach(userEvent => {
      // ai sim adiciona o CLICK no "html

      // Se tem o atributo [data-outside] significa que o html deu CLICK
      // e não que o HTML faça click novamente porque isso diminui a performance
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
      });
    element.setAttribute(outside, '');
  }


  function handleOutsideClick(event) {// <- está função também está sendo EXECUTADA
    if (!element.contains(event.target)) {//element "li" contem dentro "a"? <ul>? li?
      element.removeAttribute(outside, '');
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);

      })
      callback();//esse parâmetro será EXECUTADO COMO UMA FUNÇÃO NORMAL
    }//se não tiver a, ul, li dentro do element -> 'li' então ativa o callback()
  }
}