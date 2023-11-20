"use strict";
let salvaBtn = document.querySelector('#salva');
let testoInput = document.querySelector('#testo');
salvaBtn === null || salvaBtn === void 0 ? void 0 : salvaBtn.addEventListener('click', function () {
    // modalità1
    // if(testoInput){
    //     var testo:string = testoInput.value 
    //     console.log(testo);
    // }
    // modalità2
    let testo = testoInput === null || testoInput === void 0 ? void 0 : testoInput.value;
    console.log(testo);
});
