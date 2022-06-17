//! MAIL

//? INSTRUCTIONS IN ITALIAN

//chiedere all'utente con un prompt la sua mail
//creare un array con una lista di mail concesse    
//stampare un messaggio in console con un "accesso consentito"

//ASK USER FOR HIS/HER EMAIL
const userMail = prompt('inserisci la tua mail');

//MESSAGE IN CASE THE EMAIL IS NOT IN THE LIST
let found = false;
let messageAccess = ('accesso non consentito!! riprova')

//LIST EMAIL ACCESS FREE
const emailAccess = ["luigi@gmail.com" , "riccardo@gmail.com" , "simone@gmail.com" , "lorenzo@gmail.com" , "tiziano@libero.it" ,
 "francesco@libero.it" , "luca@libero.it" , "vincenzo@yahoo.it" , "chiara@yahoo.it" , "eleonora@yahoo.it"] 

 for (let index = 0; index < emailAccess.length; index++) {

    if (userMail == emailAccess[index]) {

        found = true;

    } else if {

        messageAccess = ('accesso consentito');

    }
}

console.log(found);

if (found = true) {
    
    messageAccess = ('accesso consentito');
    
} else {

    console.log(messageAccess);

}











 //! DICE GAME


//? INSTRUCTIONS IN ITALIAN

// generare un numero randomico max 10 per il giocatore con math ecc
// fare la stessa coa per il computer
// fare una verifica di chi dei due ha il numero piu alto
// messaggio per lo sconfitto e messaggio per il vincitore 

// RANDOM NUMBER FOR USER
const userNumber = Math.floor(Math.random() * 6) + 1;

// RANDOM NUMBER FOR AI
const aiNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber);
console.log(aiNumber);

if (userNumber < aiNumber) {

    console.log('hai perso')

} else if (userNumber > aiNumber) {

    console.log('hai vinto')

} else {

    console.log('pareggio');

}