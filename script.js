// Seleção de elementos via ID
const btnDarkMode = document.getElementById('btn-dark-mode');
const btnSaudar = document.getElementById('btn-saudar');
const btnIncrementar = document.getElementById('btn-incrementar');
const inputNome = document.getElementById('user-name');
const greetingArea = document.getElementById('greeting-area');
const personalWelcome = document.getElementById('personal-welcome');
const counterValue = document.getElementById('counter-value');

// Variável para armazenar o estado do contador
let totalAcoes = 0;

// Função para alternar entre modo claro e escuro
btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Altera o texto do botão conforme o estado
    btnDarkMode.innerText = document.body.classList.contains('dark-theme') 
        ? "Modo Claro" 
        : "Modo Escuro";
});

// Função para processar o nome e exibir saudação (Manipulação de DOM)
btnSaudar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    
    if (nome !== "") {
        // Armazena e processa a informação antes de exibir
        personalWelcome.innerHTML = `Olá, <strong>${nome}</strong>! Obrigado por apoiar o agro sustentável.`;
        
        // Mostra a div que estava escondida
        greetingArea.classList.remove('hidden');
    } else {
        alert("Por favor, digite seu nome.");
    }
});

// Função para atualizar o contador na tela
btnIncrementar.addEventListener('click', () => {
    totalAcoes++; // Incrementa a variável
    counterValue.textContent = totalAcoes; // Atualiza o HTML
    
    // Efeito visual simples via JS
    counterValue.style.color = "#8bc34a";
    setTimeout(() => { counterValue.style.color = ""; }, 300);
});
