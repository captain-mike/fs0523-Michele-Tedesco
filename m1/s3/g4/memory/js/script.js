let icons = ['🐌','🐀','🐄','🐇','🐉','🐊','🐍','🐔','🐓','🐛','🐜','🐬'];

icons = icons.concat(icons);
//potevo fare anche così
//icons = [...icons,...icons];

console.log(icons);

//ciclando le icone, falle apparire dentro l'elemento con id memory
/* <div class="card">
    <div class="icon">🐌</div>
</div> */

function shuffle(oldArray){

    let newArray = []
    let length = oldArray.length
    for(let i = 0; i < length; i++){
        let rand = Math.floor(Math.random() * oldArray.length);
        newArray.push(oldArray[rand]);
        oldArray.splice(rand,1);
    }
    return newArray;
}


icons = shuffle(icons);//mescolo l'array

let confronto = [];


let memory = document.querySelector('#memory');

icons.forEach(icona => {
    let card = document.createElement('div');
    card.classList.add('card','hidden');
    let iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');

    iconDiv.innerHTML = icona;

    card.addEventListener('click',function(){
        confronto.push(iconDiv);
        card.classList.remove('hidden')
        confronta();
    });

    
    card.appendChild(iconDiv);
    memory.appendChild(card);

})

function confronta(){
    console.log(confronto);
    if(confronto.length == 2){
        //controlla se sono uguali
        if(confronto[0].innerText != confronto[1].innerText){
            confronto[0].classList.add('hidden');
            confronto[1].classList.add('hidden');
            confronto = [];
        }
    }

}