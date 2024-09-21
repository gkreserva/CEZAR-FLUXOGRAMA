const storyText = {
    start: "Você é um jovem aventureiro em uma terra mágica. Você encontra uma bifurcação no caminho.",
    choice1: "Você vai para a esquerda, onde há uma floresta sombria.",
    choice2: "Você vai para a direita, onde há uma vila iluminada.",
    forest: "Na floresta, você encontra uma criatura misteriosa. O que você faz?",
    creatureChoice1: "Você tenta conversar com a criatura.",
    creatureChoice2: "Você corre de volta para a bifurcação.",
    village: "Na vila, as pessoas estão festivas. O que você faz?",
    festivalChoice1: "Você se junta à festa.",
    festivalChoice2: "Você pergunta sobre aventuras.",
    creatureTalk: "A criatura fala sobre um tesouro escondido! Você decide seguir suas dicas.",
    treasureFound: "Você encontra um tesouro magnífico! Parabéns, você é rico!",
    creatureFlee: "A criatura fica assustada e foge. Você fica sozinho na floresta.",
    partyJoin: "A festa na vila é incrível! Você dança e se diverte com os locais.",
    askAdventure: "Os moradores contam sobre uma montanha mágica e você decide ir até lá.",
    mountainAdventure: "Na montanha, você encontra um dragão guardião. O que você faz?",
    dragonChoice1: "Você tenta negociar com o dragão.",
    dragonChoice2: "Você foge rapidamente.",
    dragonNegotiation: "O dragão aceita te ajudar em sua jornada. Você se torna seu amigo.",
    dragonEscape: "Você consegue escapar, mas fica com medo da montanha.",
    end1: "Você é um herói da floresta! As criaturas te adoram.",
    end2: "Você se torna o dançarino mais famoso da vila.",
    end3: "Você é rico, mas sente falta das aventuras.",
    end4: "Você vive em paz com o dragão como amigo.",
    end5: "Você aprende a valorizar a coragem, mesmo em fuga."
};

const choices = {
    start: [
        { text: "Ir para a esquerda", next: "forest" },
        { text: "Ir para a direita", next: "village" }
    ],
    forest: [
        { text: "Conversar com a criatura", next: "creatureChoice1" },
        { text: "Correr de volta", next: "start" }
    ],
    village: [
        { text: "Juntar-se à festa", next: "festivalChoice1" },
        { text: "Perguntar sobre aventuras", next: "festivalChoice2" }
    ],
    creatureChoice1: [
        { text: "Seguir as dicas da criatura", next: "treasureFound" },
        { text: "Correr de volta", next: "start" }
    ],
    festivalChoice1: [
        { text: "Viver na festa para sempre", next: "end2" },
        { text: "Partir em busca de aventuras", next: "mountainAdventure" }
    ],
    festivalChoice2: [
        { text: "Seguir para a montanha mágica", next: "mountainAdventure" }
    ],
    mountainAdventure: [
        { text: "Negociar com o dragão", next: "dragonChoice1" },
        { text: "Fugir rapidamente", next: "dragonChoice2" }
    ],
    dragonChoice1: [
        { text: "Fazer amizade com o dragão", next: "dragonNegotiation" }
    ],
    dragonChoice2: [
        { text: "Voltar para a vila", next: "end5" }
    ]
};

function startStory() {
    showStory("start");
}

function showStory(key) {
    document.getElementById("story").innerText = storyText[key];
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = '';

    choices[key].forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesDiv.appendChild(button);
    });
}

// Iniciar a história
startStory();
