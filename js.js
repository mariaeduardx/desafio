const nome = "Maria Eduarda";

function getEventoAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3);

    let eventoEscolhido;
    if (numeroAleatorio === 0) {
        eventoEscolhido = "Maratona";
    } else if (numeroAleatorio === 1) {
        eventoEscolhido = "Triathlon";
    } else if (numeroAleatorio === 2) {
        eventoEscolhido = "Pentathlon";
    }

    return eventoEscolhido;
}

function getDiasTreino(evento) {
    if (evento === "Maratona") {
        return 50;
    } else if (evento === "Triathlon") {
        return 100;
    } else if (evento === "Pentathlon") {
        return 200;
    }
}

function logEvento(nome, evento) {
    alert(`${nome} vai participar do evento ${evento}`);
}

function logTempo(nome, dias) {
    alert(`${nome} vai treinar por ${dias} dias`);
}

const eventoAleatorio = getEventoAleatorio();
const diasTreino = getDiasTreino(eventoAleatorio);

logEvento(nome, eventoAleatorio);
logTempo(nome, diasTreino);
alert(`Evento escolhido: ${eventoAleatorio}`);
alert(`Dias de treino necessários: ${diasTreino}`);