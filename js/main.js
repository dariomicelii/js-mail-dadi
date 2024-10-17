
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//3. si ma noi cosa vogliamo fare?
//4. torniamo a scrivere in italiano
//5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//MAIL
//Chiedi all'utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull'esito del controllo.

let mailWithAccess = ["ciao34@gmail.com", "me@gmail.com", "agamennone45@alice.it", "menelao.paride@gmail.com"]

//Metodo base
userMail = prompt("inserisci la tua mail:")
for(let i = 0; i < mailWithAccess.length; i++){
    if(mailWithAccess[i] === userMail){
        console.log("Benvenuto!")
    }else{
        console.log("Oops, non sembri essere loggato =(");
        
    }
}

//Operatore ternario
userMail = prompt("inserisci la tua mail:")
for(let i = 0; i < mailWithAccess.length; i++){
    console.log (mailWithAccess[i] === userMail ? "Benvenuto!" : "Oops, non sembri essere loggato! =(")
}




//GIOCO DEI DADI
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
