import { S, accessToken as token, post } from './Modules/Selector.js';

console.log(token);


let bottone = <HTMLButtonElement|null> S('#salva');

bottone?.addEventListener('click',()=> console.log('ciao'));

