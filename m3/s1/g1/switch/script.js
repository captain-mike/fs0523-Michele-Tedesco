"use strict";
let oggi = new Date().getDay();
switch (oggi) {
    case 0:
        console.log('Oggi è domenica');
        break;
    case 1:
        console.log('Oggi è lunedì');
        break;
    case 2:
        console.log('Oggi è martedì');
        break;
    case 3:
        console.log('Oggi è mercoledì');
        break;
    case 4:
        console.log('Oggi è giovedì');
        break;
    case 5:
        console.log('Oggi è venerdì');
        break;
    case 6:
        console.log('Oggi è sabato');
        break;
    default:
        console.log('I numeri consentiti vanno da zero a 6');
}
