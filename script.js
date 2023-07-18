/* creo la variabile "username" */
const username = prompt("inserisci il tuo nome utente");
/* creo la variabile "userSurname" */
const userSurname = prompt('inserisci il tuo cognome');
/* creo la variabile "favColor" */
const favColor = prompt('inserici il tuo colore preferito');
/* creo la variabile "description" */
const description = `questo è la tua nuova password, 
è stata creata concatenando il tuo nome, il tuo cognome 
e il tuo colore preferito! pensa te che figata assurda!`
/* creo la variabile "generated" */
const generated = username + userSurname + favColor;

/* creo la variabile "welcomeMessage" */
const welcomeMessage = `
<h2>Benvenuto ${generated}</h2>
<P>${description}</p>
`;
/* mostro a schermo "welcomeMessage" */
document.getElementById('display').innerHTML = welcomeMessage;