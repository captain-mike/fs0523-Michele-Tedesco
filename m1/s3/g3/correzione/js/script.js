let bottone = document.getElementById('bottone');
let lista = document.getElementById('lista');

bottone.addEventListener('click', function(){

    let inputTesto = document.getElementById('testo');

    if(!inputTesto.value){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hai dimenticato il testo'
          })
        return //se il campo input è vuoto blocco la funzione
    };

    let li = document.createElement('li');
    li.innerText = inputTesto.value;

    let elimina = document.createElement('button')
    elimina.innerText = 'Elimina';
    elimina.addEventListener('click', function(){
        li.remove();
    })

    
    li.append(elimina);
    lista.prepend(li);
    
    inputTesto.value = '';
    
});






