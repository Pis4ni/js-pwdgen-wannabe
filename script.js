const username = prompt("inserisci il tuo nome utente");
const userSurname = prompt('inserisci il tuo cognome');
const favColor = prompt('inserici il tuo colore preferito');

const description = `questo è la tua nuova password, è stata creata concatenando il tuo nome, il tuo cognome e il tuo colore preferito! pensa te che figata assurda`

const generated = username + userSurname + favColor;


const welcomeMessage = `
<h2>Benvenuto ${generated}</h2>
<P>${description}</p>
`;

document.getElementById('display').innerHTML = welcomeMessage;