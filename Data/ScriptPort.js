// Regex //
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/; // esse regex irá validar tanto emails terminados em .com quanto .com.br //
const phoneRegex = /^(\([0-9]{2}\) [0-9]{4,5}-[0-9]{4})?$/; // esse regex irá validar tanto telefones xx xxxx-xxxx quanto xx xxxxx-xxxx //

// Validação dos Dados //
function validateForm() {
// Coloca os valores dos campos dentro das variaveis //
  let x = document.forms["myForm"]["name"].value;
  let y = document.forms["myForm"]["email"].value;
  let z = document.forms["myForm"]["message"].value;
  let a = document.forms["myForm"]["phone"].value.trim(); // trim irá remover espaços extras em branco // 

// Check E-mail //
  if (y === "" || !emailRegex.test(y)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return false;
  }
// Check Name && Message //
  if (x, z === ""){
    alert("Preencha todos os campos");
    return false;
  }
// Check Phone // O telefone é opcional, então foi ajustado para validar apenas se o campo conter algo //
  if (a !== "" && !phoneRegex.test(a)) {
    alert("Por favor, insira um telefone válido no formato (xx) xxxx-xxxx.");
    return false;
  }
// Se tudo estiver OK, retorna true (dados enviados com sucesso) //
  alert ("Enviado com Sucesso");
  return true;
}


// <--- JSON ---> //

// Carregar e processar o arquivo JSON
document.addEventListener('DOMContentLoaded', async function() {
  try {
    // Carrega o arquivo JSON e espera pela resolução da promessa
    const response = await fetch('./Projeto.Json');
    const data = await response.json();  //Converte para array

    // Cria botões e adiciona eventos de clique
    createButtons(data.projects);
    addClickEventsToButtons(data.projects);
  } catch (error) {
    console.error('Erro ao carregar o arquivo JSON:', error);
  }
});

// Função para criar botões dinamicamente
function createButtons(projects) {
  const buttonContainer = document.getElementById('buttons');
  buttonContainer.innerHTML = ''; // Limpa os botões existentes

  projects.forEach((project, index) => {
    const button = document.createElement('button');
    button.classList.add('each-button'); // Adiciona a classe CSS
    button.id = `project-${project.id}`;
    button.textContent = `Projeto ${index + 1}`;
    buttonContainer.appendChild(button);
  });
}

// Função para adicionar eventos de clique aos botões
function addClickEventsToButtons(projects) {
  projects.forEach(project => {
    const button = document.getElementById(`project-${project.id}`);
    if (button) {
      button.addEventListener('click', () => {
        showProjectInfo(project);
      });
    }
  });
}

// Função para exibir as informações do projeto
function showProjectInfo(project) {
  const projectInfoContainer = document.getElementById('project-info-container');
  projectInfoContainer.innerHTML = ''; // Limpa o conteúdo anterior

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = project.title;

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('image');

  const image = document.createElement('img');
  image.classList.add('project-image'); // Adiciona uma classe à imagem
  image.src = project.image;
  image.alt = project.title;

  const description = document.createElement('div');
  description.classList.add('description');
  description.textContent = project.description;

  // Adiciona os elementos diretamente ao projectInfoContainer
  projectInfoContainer.appendChild(title);
  projectInfoContainer.appendChild(imageDiv);
  imageDiv.appendChild(image);
  projectInfoContainer.appendChild(description);

  // Exibe as informações do projeto
  projectInfoContainer.style.display = 'block';
}



// Função de Exibição Dinâmica de Conteúdo 
function dynamicDisplay(divId, arquivo) {
    // Esconde todas as divs --> sempre irá esconde as divs após o click independente da div clicada e depois retirar hidden da div clicada
    document.getElementById('even').classList.add('hidden');
    document.getElementById('odd').classList.add('hidden');

    // Carrega o conteúdo do arquivo usando fetch
    fetch(arquivo)
        .then(response => response.text()) //converte em texto, ideal para exibir docs
        .then(data => {
            // Insere o conteúdo carregado na div correspondente
            var divToShow = document.getElementById(divId);
            divToShow.innerHTML = data;
            divToShow.classList.remove('hidden');
        })
        .catch(error => console.error('Erro ao carregar o arquivo:', error));
}



// Função de Exibição Dinâmica de Conteúdo 
function dynamicDisplayDiv(divId) {
  // Esconde todas as divs --> sempre irá esconde as divs após o click independente da div clicada e depois retirar hidden da div clicada
  document.getElementById('even').classList.add('hidden');
  document.getElementById('odd').classList.add('hidden');

  // Insere o conteúdo carregado na div correspondente
  var divToShow = document.getElementById(divId);
  divToShow.classList.remove('hidden');
}