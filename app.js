// LOGIN
function login() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('appScreen').classList.remove('hidden');
}

// FUNÇÕES BASE (por enquanto simples)
function openSettings() {
  alert("Ajustes (em construção)");
}

function openProducts() {
  alert("Produtos (em construção)");
}

function openProcedures() {
  alert("Procedimentos (em construção)");
}

function newSale() {
  alert("Nova venda (em construção)");
}

function openThemes() {
  alert("Temas (em construção)");
}

// FUNDO DO LOGIN
const bgInput = document.getElementById("bgImageInput");
bgInput.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    localStorage.setItem("loginBg", reader.result);
    document.getElementById("loginScreen").style.backgroundImage =
      `url(${reader.result})`;
  };

  reader.readAsDataURL(file);
});

// CARREGAR FUNDO SALVO
window.onload = function () {
  const bg = localStorage.getItem("loginBg");
  if (bg) {
    document.getElementById("loginScreen").style.backgroundImage = `url(${bg})`;
  }
};
