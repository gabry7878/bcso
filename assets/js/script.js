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

// --- 2. GESTIONE DELLE TAB DEI VERTICI ---
const datiVertici = {
    lodi: {
        titolo: "Dir. Generale Coca",
        data: "In servizio dal 15/01/2025.",
        descrizione: "Pilastro della continuità amministrativa dello sceriffato. La sua precisione metodica si concentra sulla gestione dei protocolli e della burocrazia interna, assicurando una base solida per supportare le unità operative impegnate a Sandy Shores e Paleto Bay."
    },
    roma: {
        titolo: "Vice Dir. Generale Detroit",
        data: "In servizio dal 20/02/2025.",
        descrizione: "Braccio destro dello Sceriffo, supervisiona le operazioni quotidiane e garantisce che le direttive dell'alto comando vengano eseguite con la massima efficienza su tutto il territorio della contea di Blaine."
    },
    saitama: {
        titolo: "Direttore Atlanta",
        data: "In servizio dal 10/03/2025.",
        descrizione: "Responsabile diretto delle unità tattiche e delle indagini speciali. Gestisce il dispiegamento delle pattuglie nelle zone ad alto rischio e coordina gli interventi della Task Force BCSO."
    },
    cagliari: {
        titolo: "Vice Direttore (Cagliari)",
        data: "In servizio dal 05/04/2025.",
        descrizione: "Assiste la direzione operativa nella gestione del personale e nella logistica del dipartimento. È il punto di riferimento principale per la formazione delle nuove reclute sul campo."
    }
};

function cambiaVertice(idRuolo, elementoCliccato) {
    // Rimuovi la classe 'active' da tutti i bottoni
    const bottoni = document.querySelectorAll('.tag-container .tag');
    bottoni.forEach(btn => btn.classList.remove('active'));
    
    // Aggiungi la classe 'active' al bottone appena cliccato
    elementoCliccato.classList.add('active');

    // Recupera il div del contenuto per l'effetto di dissolvenza
    const contenitore = document.getElementById('vertici-content');
    
    // Dissolvenza in uscita
    contenitore.style.opacity = 0;

    // Aspetta 200ms, poi cambia i testi
    setTimeout(() => {
        const dati = datiVertici[idRuolo];
        
        // Aggiorna titolo e descrizione
        document.getElementById('vertici-titolo').innerText = dati.titolo;
        document.getElementById('vertici-desc').innerHTML = `<strong class="text-highlight">${dati.data}</strong> ${dati.descrizione}`;
        
        // Dissolvenza in entrata
        contenitore.style.opacity = 1;
    }, 200);
}