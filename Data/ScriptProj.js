// <--- JSON ---> //

// Carregar e processar o arquivo JSON
document.addEventListener('DOMContentLoaded', async function() {
    try {
      // Carrega o arquivo JSON e espera pela resolução da promessa
      const response = await fetch('./Data/Projetos.json');
      const data = await response.json();
  
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
  