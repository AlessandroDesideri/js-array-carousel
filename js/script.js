// Array titoli
const titleArray = [
    'Resurrezione',
    'Guerra',
    'Carestia',
    'Morte',
];

// Array paragrafo
const paragraphArray = [
    'Il primo dei quattro cavalli porta su di sé un arciere, quindi un cavaliere abile nell uso delle armi, simbolo di supremazia bellica. Il colore del cavallo è il bianco, simbolo della Resurrezione. "Quando l Agnello sciolse il primo dei sette sigilli, vidi e udii il primo dei quattro esseri viventi che gridava come con voce di tuono: «Vieni». Ed ecco mi apparve un cavallo bianco e colui che lo cavalcava aveva un arco, gli fu data una corona e poi egli uscì vittorioso per vincere ancora."',
    'Il colore del cavallo, rosso fuoco, nell Apocalisse è associato ai nemici di Dio. "Quando l Agnello aprì il secondo sigillo, udii il secondo essere vivente che gridava: «Vieni». Allora uscì un altro cavallo, rosso fuoco. A colui che lo cavalcava fu dato potere di togliere la pace dalla terra perché gli uomini si uccidessero a vicenda e gli fu consegnata una grande spada."',
    'Il terzo cavaliere simboleggia la carestia, spesso associata alla guerra, e i suoi effetti: la morte. "Quando l Agnello aprì il terzo sigillo, udii il terzo essere vivente che gridava: «Vieni». Ed ecco, mi apparve un cavallo nero e colui che lo cavalcava aveva una bilancia in mano. E udii gridare una voce in mezzo ai quattro esseri viventi: «Una misura di grano per un danaro e tre misure d orzo per un danaro! Olio e vino non siano sprecati."',
    'L ultimo cavallo, di colore cadaverico, porta sul proprio dorso un cavaliere chiamato Morte. "Quando l Agnello aprì il terzo sigillo, udii il terzo essere vivente che gridava: «Vieni». Ed ecco, mi apparve un cavallo nero e colui che lo cavalcava aveva una bilancia in mano. E udii gridare una voce in mezzo ai quattro esseri viventi: «Una misura di grano per un danaro e tre misure d orzo per un danaro! Olio e vino non siano sprecati"',
];

// Variabili
let currentIndex = 0
const title = document.querySelector('.title');
const paragraph = document.querySelector('.paragraph');
const buttonLeft = document.getElementById('btn-left');
const buttonRight = document.getElementById('btn-right');
title.innerHTML = titleArray[0];
paragraph.innerHTML = paragraphArray[0];
// Funzioni
// Funzione cambio immagine destra
btnRight.addEventListener('click', function(){
    currentIndex++;
    if (currentIndex > titleArray.length -1){
         currentIndex = 0
    }
    title.innerHTML = titleArray[currentIndex];
    paragraph.innerHTML = paragraphArray[currentIndex]
    ;
})
// Funzione cambio immagine sinistra
btnLeft.addEventListener('click', function(){
    currentIndex--;
    if (currentIndex <0){
         currentIndex = titleArray.length -1;
    }
    title.innerHTML = titleArray[currentIndex];
    paragraph.innerHTML = paragraphArray[currentIndex];
    ;
})

