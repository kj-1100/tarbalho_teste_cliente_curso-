document.addEventListener('DOMContentLoaded', function () {

  // Máscara de entrada para o CPF
  document.getElementById('cpf').addEventListener('input', function (e) {
    var value = e.target.value;
    var CPFPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona traço após o nono dígito

    e.target.value = CPFPattern;

    // Verifica se o CPF é válido
    if (CPFPattern.length === 14) {
      e.target.style.border = "2px solid green"; // Caso válido, borda verde
    } else {
      e.target.style.border = "2px solid red"; // Caso inválido, borda vermelha
    }
  });

  // Máscara de entrada para o CEP
  document.getElementById('CEP').addEventListener('input', function (e) {
    var value = e.target.value;
    var CEPPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
      .replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona traço após o quinto dígito

    e.target.value = CEPPattern;

    // Verifica se o CEP é válido
    if (CEPPattern.length === 9) {
      e.target.style.border = "2px solid green"; // Caso válido, borda verde
    } else {
      e.target.style.border = "2px solid red"; // Caso inválido, borda vermelha
    }
  });

  // Máscara de entrada para o Email
  document.getElementById('email').addEventListener('input', function (e) {
    var value = e.target.value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o e-mail

    // Verifica se o e-mail é válido
    if (emailPattern.test(value)) {
      e.target.style.border = "2px solid green"; // Caso válido, borda verde
    } else {
      e.target.style.border = "2px solid red"; // Caso inválido, borda vermelha
    }
  });

  // Máscara de entrada para o Celular
  document.getElementById('contato').addEventListener('input', function (e) {
    var value = e.target.value;
    var ContatoPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
      .replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3'); // Adiciona parênteses, espaço e traço

    e.target.value = ContatoPattern;

    // Verifica se o contato é válido
    if (ContatoPattern.length === 14 || ContatoPattern.length === 15) {
      e.target.style.border = "2px solid green"; // Caso válido, borda verde
    } else {
      e.target.style.border = "2px solid red"; // Caso inválido, borda vermelha
    }
  });

  // Pop-up adicionar cliente
  var modalAddClient = document.getElementById("modalAddClient");
  var btnAddClient = document.getElementById("btnAddClient");
  var spanAddClient = document.querySelector("#modalAddClient .close");

  btnAddClient.onclick = function () {
    modalAddClient.style.display = "block";
  }

  spanAddClient.onclick = function () {
    modalAddClient.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modalAddClient) {
      modalAddClient.style.display = "none";
    }
  }

  var listaClientes = [];
  var formAddClient = document.getElementById("formAddClient");

  // Envio do formulário
  formAddClient.addEventListener('submit', function (e) {
    e.preventDefault();

    // Captura dos dados do formulário
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var cep = document.getElementById("CEP").value;
    var email = document.getElementById("email").value;
    var contato = document.getElementById("contato").value;

    // Criação do objeto cliente
    var cliente = {
      nome: nome,
      cpf: cpf,
      cep: cep,
      email: email,
      contato: contato
    };

    // Adiciona o cliente à lista de clientes
    listaClientes.push(cliente);

    // Atualiza a exibição da lista na interface
    exibirClientes();

    // Limpa os campos do formulário
    formAddClient.reset();
  });

  function exibirClientes() {
    var listaClientesElement = document.getElementById("listaClientes");

    // Limpa o conteúdo atual da lista
    listaClientesElement.innerHTML = '';

    listaClientes.forEach(function (cliente, index) {
      var clienteElement = document.createElement('div');
      clienteElement.innerHTML = `
          <div >
            <hr>      
            <div class="letraBranca">
            <span>
                <div>Nome: ${cliente.nome} </div>
                <div>CPF: ${cliente.cpf} </div>
                <div class="botaoLista" >
                <button class="btnEditarCliente" data-index="${index}"><img src="images/configuraçoes.png" alt="Ícone do configuraçoes"></button>
                <button class="btnClientContact" data-index="${index}"><img src="images/contatos.png" alt="Ícone do Carrinho"></button>
                </div>
            </span>
        </div>
            <hr>
          </div>
            <div id="modalClientContact_${index}" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <p><span>CEP: ${cliente.cep}</span><br>
                <span>Email: ${cliente.email}</span><br>
                <span>Contato: ${cliente.contato}</span><br></p>
              </div>
          </div>
         `;
      listaClientesElement.appendChild(clienteElement);
    });

    // Adiciona os manipuladores de evento após criar os elementos
    ContatoCliente();
    Configura();
  }

  // Função para adicionar manipuladores de evento aos botões "Contato com Cliente"
  function ContatoCliente() {
    var btnsContatoCliente = document.querySelectorAll('.btnClientContact');
    btnsContatoCliente.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var index = this.getAttribute('data-index');
        var modalClientContact = document.getElementById(`modalClientContact_${index}`);
        if (modalClientContact) {
          modalClientContact.style.display = "block";

          // Adiciona manipulador de evento para fechar o modal
          var spanClose = modalClientContact.querySelector(".close");
          if (spanClose) {
            spanClose.addEventListener('click', function () {
              modalClientContact.style.display = "none";
            });
          }

          // Adiciona manipulador de evento para fechar o modal clicando fora dele
          window.addEventListener('click', function (event) {
            if (event.target == modalClientContact) {
              modalClientContact.style.display = "none";
            }
          });
        } else {
          console.error("Modal correspondente não encontrado para este cliente.");
        }
      });
    });
  }
  // Função para adicionar manipuladores de evento aos botões "Editar"
  function Configura() {
    var btnsEditarCliente = document.querySelectorAll('.btnEditarCliente');
    btnsEditarCliente.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var index = this.getAttribute('data-index');
        editarCliente(index);
      });
    });
  }
});

