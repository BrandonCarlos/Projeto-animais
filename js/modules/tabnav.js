export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  // Verificar se os itens acima realmente existem
  //nesta página atual que eu estou agora, e se na
  //página que eu estiver não existir então não faz
  //estás funções abaixo.

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {//index = 0, dependendo do que eu CLIQUEI
      tabContent.forEach(section => {//de todas as SECTION's vamos remover a class="ativo"
        section.classList.remove('ativo')
      });
      // console.log(tabContent[index].dataset.anime);
      const direcao = tabContent[index].dataset.anime;//section[0].dataset.anime peguei o DATASET
      console.log(direcao);
      tabContent[index].classList.add('ativo', direcao);//adicionando 2 classes a SECTION
      //adicionando a SECTION a classe"ativo show-right"
      //ou classe="ativo show-down"
      //ex: cliquei no item3 = então indice 2, pego o indice 2 da SECTION que corresponde 
      //a esse item3, e coloque classe "ativo show-right" <- nessa SECTION então essa SECTION
      //aparece com uma animação bem legal
    }


    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);//cliquei no 1° LI e to enviando o INDICE 0 também
      })
    })
  }
}