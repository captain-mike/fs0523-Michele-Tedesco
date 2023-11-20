let salvaBtn:HTMLButtonElement|null = document.querySelector('#salva');
let testoInput:HTMLInputElement|null = document.querySelector('#testo');

salvaBtn?.addEventListener('click',function(){

    // modalità1
    // if(testoInput){
        //     var testo:string = testoInput.value 
        //     console.log(testo);
        // }
        
    // modalità2
    let testo:string|undefined = testoInput?.value 
    console.log(testo);
    
})