// Máscara de entrada para o CPF
document.getElementById('cpf').addEventListener('input', function (e) {
  var value = e.target.value;
  var CPfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
    .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
    .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona traço após o nono dígito

  e.target.value = CPfPattern;

  // Verifica se o CPF é válido
  if (CPfPattern.length === 14) {
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

// Contato com o cliente
var modalClientContact = document.getElementById("modalClientContact");
var btnClientContact = document.getElementById("btnClientContact");
var spanClientContact = document.querySelector("#modalClientContact .close");

btnClientContact.onclick = function () {
  modalClientContact.style.display = "block";
}

spanClientContact.onclick = function () {
  modalClientContact.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modalClientContact) {
    modalClientContact.style.display = "none";
  }
}
