// Máscara de entrada para o CPF
document.getElementById('cpf').addEventListener('input', function (e) {
  var value = e.target.value;
  var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
    .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
    .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
    .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
    .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
  e.target.value = cpfPattern;
});

// Máscara de entrada para o CEP
document.getElementById('CEP').addEventListener('input', function (e) {
  var value = e.target.value;
  var CEPPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
    .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona traço após o quinto dígito
  e.target.value = CEPPattern;
})
document.getElementById('contato').addEventListener('input', function (e) {
  var value = e.target.value;
  var ContatoPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
    .replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');// Adiciona parênteses, espaço e traço
  e.target.value = ContatoPattern;
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