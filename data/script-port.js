// <--- Scripts do Fomulario ---> //

// Adiciona DOM evento //
document.addEventListener('DOMContentLoaded', function () {

  // Estabelece conexao direta atraves do "name" do formulario para poder manipula-lo, no caso de mais de 1 formulario, é uma maneira de especificar //
  const contactForm = document.querySelector('form[name="contactForm"]');

  // Regex //
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/; // esse regex irá validar tanto emails terminados em .com quanto .com.br //
  const phoneRegex = /^(\([0-9]{2}\) [0-9]{4,5}-[0-9]{4})?$/; // esse regex irá validar tanto telefones xx xxxx-xxxx quanto xx xxxxx-xxxx //

  // Adciona um evento que Executa a função quando o formulario é enviado através do botão "Submit" //
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Interrompe o comportamento padrão do Navegador para facilitar a manipulação dos dados //

    // Função de validação de formulário
    function validateForm() {
      // Coloca os valores dos campos dentro das variaveis //
      let x = document.forms["contactForm"]["name"].value;
      let y = document.forms["contactForm"]["email"].value;
      let z = document.forms["contactForm"]["message"].value;
      let a = document.forms["contactForm"]["phone"].value.trim(); // trim irá remover espaços extras em branco // 

      // Check E-mail //
      if (y === "" || !emailRegex.test(y)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
      }
      // Check Name && Message //
      if (x, z === "") {
        alert("Preencha todos os campos");
        return false;
      }
      // Check Phone // O telefone é opcional, então foi ajustado para validar apenas se o campo conter algo //
      if (a !== "" && !phoneRegex.test(a)) {
        alert("Por favor, insira um telefone válido no formato (xx) xxxx-xxxx.");
        return false;
      }
      // Se tudo estiver OK, retorna true (dados enviados com sucesso) //
      return true;
    }

    // Executa a validação
    if (validateForm()) { //if true da o alert, não há necessidade de else pois a função já avisa o usuário no caso de false (campos vazios ou erros)
      alert("Enviado com Sucesso");
      window.location.href = "index.php"; // Redireciona após envio bem-sucedido
    }
  });
});


// <--- Função de Exibição Dinâmica de Conteúdo ---> //

function dynamicDisplayDiv(divId) {
  // Esconde todas as divs
  document.getElementById('even').classList.add('hidden');
  document.getElementById('odd').classList.add('hidden');

  // Insere o conteúdo carregado na div correspondente
  var divToShow = document.getElementById(divId);
  divToShow.classList.remove('hidden');

  // Lógica para mostrar ou esconder o botão "Contact Us"
  if (divId === 'odd') {
      document.getElementById('contactButton').style.display = 'none'; // Esconde o botão "Contact Us"
  } else {
      document.getElementById('contactButton').style.display = 'block'; // Mostra o botão "Contact Us"
  }
}
