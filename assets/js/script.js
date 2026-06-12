// --- VARIABILI GLOBALI PER LA ROTAZIONE ---
const bottoniOrdine = ['lodi', 'roma', 'saitama', 'cagliari'];
let indiceCorrente = 0;
let timerRotazione;

// --- 1. GESTIONE NAVBAR DURANTE LO SCROLL ---
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

// --- 2. GESTIONE DATI VERTICI ---
const datiVertici = {
    lodi: {
        titolo: "Dir. Generale Coca",
        foto: "https://cdn.discordapp.com/attachments/1514660019801690123/1514682881153437696/image.png?ex=6a2c41dc&is=6a2af05c&hm=53c4ff69c6dd13473cd8b7cff574f9bb33eb2dd29856b9dd8ce1dfa7fc6d4fe0&",
        data: "In servizio dal 15/01/2025.",
        descrizione: "Pilastro della continuità amministrativa dello sceriffato. La sua precisione metodica si concentra sulla gestione dei protocolli e della burocrazia interna."
    },
    roma: {
        titolo: "Vice Dir. Generale Detroit",
        foto: "INSERISCI_URL_DETROIT",
        data: "In servizio dal 20/02/2025.",
        descrizione: "Braccio destro dello Sceriffo, supervisiona le operazioni quotidiane e garantisce che le direttive dell'alto comando vengano eseguite con la massima efficienza."
    },
    saitama: {
        titolo: "Direttore Atlanta",
        foto: "INSERISCI_URL_ATLANTA",
        data: "In servizio dal 10/03/2025.",
        descrizione: "Responsabile diretto delle unità tattiche e delle indagini speciali. Gestisce il dispiegamento delle pattuglie nelle zone ad alto rischio."
    },
    cagliari: {
        titolo: "Vice Direttore (Cagliari)",
        foto: "INSERISCI_URL_CAGLIARI",
        data: "In servizio dal 05/04/2025.",
        descrizione: "Assiste la direzione operativa nella gestione del personale e nella logistica del dipartimento. È il punto di riferimento principale per la formazione delle nuove reclute."
    }
};

// --- 3. LOGICA CAMBIO VERTICI E ANIMAZIONE ---
function cambiaVertice(idRuolo, elementoCliccato) {
    // 1. Reset visivo dei bottoni
    const bottoni = document.querySelectorAll('.tag-container .tag');
    bottoni.forEach(btn => btn.classList.remove('active'));
    
    // 2. Aggiungi 'active' al bottone che hai appena selezionato
    elementoCliccato.classList.add('active');

    // --- AGGIUNTA DEL TRUCCO PER L'ANIMAZIONE ---
    // Resetta l'animazione forzando il browser a ricalcolarla
    elementoCliccato.style.animation = 'none';
    elementoCliccato.offsetHeight; // Questo comando legge l'altezza e "sveglia" il browser
    elementoCliccato.style.animation = null; 
    // --------------------------------------------

    // 3. Logica di cambio dati (dissolvenza)
    const contenitore = document.getElementById('vertici-content');
    const foto = document.getElementById('vertici-img');
    
    contenitore.style.opacity = 0;
    foto.style.opacity = 0;

    setTimeout(() => {
        const dati = datiVertici[idRuolo];
        document.getElementById('vertici-titolo').innerText = dati.titolo;
        document.getElementById('vertici-desc').innerHTML = `<strong class="text-highlight">${dati.data}</strong> ${dati.descrizione}`;
        foto.style.backgroundImage = `url('${dati.foto}')`;
        
        contenitore.style.opacity = 1;
        foto.style.opacity = 1;
    }, 200);
}

// --- 4. GESTIONE ROTAZIONE AUTOMATICA ---
function avviaRotazioneAutomatica() {
    if (timerRotazione) clearInterval(timerRotazione);
    
    timerRotazione = setInterval(() => {
        indiceCorrente = (indiceCorrente + 1) % bottoniOrdine.length;
        const idDaSelezionare = bottoniOrdine[indiceCorrente];
        const bottoneDaCliccare = document.querySelector(`button[onclick*="${idDaSelezionare}"]`);
        
        if (bottoneDaCliccare) {
            cambiaVertice(idDaSelezionare, bottoneDaCliccare);
        }
    }, 10000);
}

// --- 5. GESTIONE CODICI RADIO ---
function toggleCodici() {
    var x = document.getElementById("codici-radio-text");
    x.style.display = (x.style.display === "none") ? "block" : "none";
}

// --- 6. GESTIONE MENU REPARTI ---
function toggleMenu(id) {
    var menu = document.getElementById(id);
    menu.style.display = (menu.style.display === "none") ? "block" : "none";
}

// Avvio automatico
window.onload = avviaRotazioneAutomatica;
