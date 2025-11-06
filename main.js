// ** CONFIGURAÇÃO: Altere esta data para o dia e hora do final das aulas/formatura **
// Formato: Ano, Mês-1, Dia, Hora, Minuto, Segundo
// Exemplo: 15 de Dezembro de 2025, às 19:30:00
const dataFim = new Date(2025, 11, 15, 19, 30, 0).getTime(); 

const cronometro = document.getElementById('cronometro');
const mensagemFinal = document.getElementById('mensagem-final');

function atualizarContagem() {
    const agora = new Date().getTime();
    const distancia = dataFim - agora;

    // Elementos do HTML
    const diasEl = document.getElementById('dias');
    const horasEl = document.getElementById('horas');
    const minutosEl = document.getElementById('minutos');
    const segundosEl = document.getElementById('segundos');

    // Cálculos de tempo (muitas fórmulas mágicas!)
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    if (distancia > 0) {
        // Exibe a contagem regressiva
        diasEl.textContent = String(dias).padStart(2, '0');
        horasEl.textContent = String(horas).padStart(2, '0');
        minutosEl.textContent = String(minutos).padStart(2, '0');
        segundosEl.textContent = String(segundos).padStart(2, '0');
    } else {
        // O tempo acabou!
        clearInterval(intervalo);
        cronometro.classList.add('hidden'); // Oculta o cronômetro
        mensagemFinal.classList.remove('hidden'); // Exibe a mensagem final
        
        // Coloca '00' em tudo só para garantir
        diasEl.textContent = '00';
        horasEl.textContent = '00';
        minutosEl.textContent = '00';
        segundosEl.textContent = '00';
    }
}

// Atualiza a contagem a cada 1 segundo (1000 milissegundos)
const intervalo = setInterval(atualizarContagem, 1000);

// Executa a função na carga da página para evitar um atraso de 1 segundo
atualizarContagem();