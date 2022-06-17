//chiedere all'utente con un prompt la sua mail

//creare un array con una lista di mail concesse    

//stampare un messaggio in console con un "accesso consentito"

const userMail = prompt('inserisci la tua mail');

const emailAccess = ["luigi@gmail.com" , "riccardo@gmail.com" , "simone@gmail.com" , "lorenzo@gmail.com" , "tiziano@libero.it" ,
 "francesco@libero.it" , "luca@libero.it" , "vincenzo@yahoo.it" , "chiara@yahoo.it" , "eleonora@yahoo.it"] 

 for (let index = 0; index < emailAccess.length; index++) {

    if (userMail == emailAccess[index]) {

        console.log("accesso consentito");

    } else {

        console.log('accesso non consentito!! ritenta');

    }
    
 }