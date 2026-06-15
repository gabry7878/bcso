// --- VARIABILI GLOBALI PER LA ROTAZIONE ---
const bottoniOrdine = ['coca', 'detroit', 'atlanta']; // Nomi allineati correttamente
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
    coca: { 
        t: "Dir. Generale Coca",
        f: "assets/img/coca.png",
        d: "In servizio dal 06/12/2025.",
        ds: "Pilastro della continuità amministrativa dello sceriffato. La sua precisione metodica si concentra sulla gestione dei protocolli e della burocrazia interna."
    },
    detroit: { 
        t: "V. Dir. Generale Phoenix",
        f: "https://cdn.discordapp.com/icons/1071346343710306414/a_c4289dc50692ae051845813e7c2966ea.gif?animated=true&size=1024",
        d: "In servizio dal 29/12/2025.",
        ds: "Coadiuva la direzione generale nella supervisione dei dipartimenti e nel coordinamento strategico sul territorio."
    },
    atlanta: { 
        t: "Direttore Stuporeh",
        f: "assets/img/stuporeh.png",
        d: "In servizio dal 10/03/2025.",
        ds: "Responsabile diretto delle unità tattiche e delle indagini speciali. Gestisce il dispiegamento delle pattuglie nelle zone ad alto rischio."
    }
};

// --- 3. LOGICA CAMBIO VERTICI E ANIMAZIONE ---
function _cV(r, e) {
    document.querySelectorAll('.tag-container .tag').forEach(b => b.classList.remove('active'));
    e.classList.add('active');
    
    // Reset dell'animazione
    e.style.animation = 'none';
    e.offsetHeight; 
    e.style.animation = null;

    const c = document.getElementById('vertici-content'), f = document.getElementById('vertici-img');
    c.style.opacity = 0;
    f.style.opacity = 0;

    setTimeout(() => {
        const d = datiVertici[r];
        document.getElementById('vertici-titolo').innerText = d.t;
        document.getElementById('vertici-desc').innerHTML = `<strong class="text-highlight">${d.d}</strong> ${d.ds}`;
        f.style.backgroundImage = `url('${d.f}')`;
        c.style.opacity = 1;
        f.style.opacity = 1;
    }, 200);
}

// --- 4. GESTIONE ROTAZIONE AUTOMATICA ---
function _aR() {
    if (_tR) clearInterval(_tR);
    _tR = setInterval(() => {
        indiceCorrente = (indiceCorrente + 1) % bottoniOrdine.length;
        const i = bottoniOrdine[indiceCorrente], b = document.querySelector(`button[onclick*="${i}"]`);
        if (b) _cV(i, b);
    }, 10000);
}

// --- 5. GESTIONE CODICI RADIO ---
function _tC() {
    let x = document.getElementById("codici-radio-text");
    x.style.display = x.style.display === "none" ? "block" : "none";
}

// --- 6. GESTIONE MENU REPARTI ---
function _tM(i) {
    let m = document.getElementById(i);
    m.style.display = m.style.display === "none" ? "block" : "none";
}

window.onload = _aR;
