let todayDate = new Date();//La data di oggi

let calendar = document.querySelector('#EpiCalendar');//il calendario
let daysArea = calendar.querySelector('.days');//l'area in cui appariranno giorni
let newMeetingInput = calendar.querySelector('.meeting-date-input');

let lastDayOfTheMonth = getLastDayOfMonth();//ottengo il numero dell'ultimo giorno del mese

let monthName = calendar.querySelector('.month-name');
monthName.innerText = todayDate.toLocaleDateString('it-IT',{month:'long'})


let datiSalvati = localStorage.getItem('appuntamenti');//recupera la voce appuntamenti nel localStorage

let dati = datiSalvati ? JSON.parse(datiSalvati) : [];//se dentro datiSalvati c'è qualcosa allora prendi quel valore, trasformalo in oggetto/array, altrimenti assegna un array vuoti

for(let i = 1; i <= lastDayOfTheMonth; i++) {
    /**
     * Creazione slot per i dati
     */

    if(!dati[i].length){
        dati[i] = [];    
    }
    
    
    /**
     * Generazione automatica giorni
     */
    let day = document.createElement('div');//<div></div>
    day.classList.add('day');//<div class="day"></div>
    
    if(i == todayDate.getDate()){
        day.classList.add('today');//<div class="day"></div>
    }
    
    day.innerText = i;//<div class="day">1</div>
    
    /*aggiunta funzionalità scelta giorno*/
    day.addEventListener('click',function(){
        let year = todayDate.getFullYear();
        let month = String(todayDate.getMonth() + 1).padStart(2, '0');
        let dayString = String(i).padStart(2, '0');
        newMeetingInput.value = `${year}-${month}-${dayString}`;
        console.log(`${year}-${month}-${dayString}`);
        console.log(newMeetingInput);
    })

    daysArea.appendChild(day);//faccio si che il giorno appaia
}

/**
* Aggiunta nuovo appuntamento
*/

let saveButton = calendar.querySelector('.save-meeting');
saveButton.addEventListener('click',function(){
    let meetingDateInput = calendar.querySelector('.meeting-date-input');
    let meetingTimeInput = calendar.querySelector('.meeting-time-input');
    let meetingNameInput = calendar.querySelector('.meeting-name-input');

    let tempDate = new Date(meetingDateInput.value+' '+meetingTimeInput.value);

    let oggettoMeeting = {
        id : meetingNameInput.value + tempDate.getTime(),
        meetingName : meetingNameInput.value,
        meetingDate : meetingDateInput.value,
        meetingTime : meetingTimeInput.value,
        meetingTimeString: tempDate.getTime()
    }

    let giornoSelezionato = tempDate.getDate();
    dati[giornoSelezionato].push(oggettoMeeting);//inserisco l'appuntamento neill'array degli appuntamenti, usando un riferimento al numero del giorno selezionato

    let jsonDati = JSON.stringify(dati);//trasformo i dati in stringa formato json
    localStorage.setItem('appuntamenti',jsonDati)
})













console.log(dati);



































function getLastDayOfMonth(){
    let now = new Date();//creo un oggetto date contenente la data e l'ora attuale
    now.setMonth(now.getMonth() + 1);//mando avanti la data di 1 mese
    now.setDate(0);//setto la data al giorno precedente rispetto al primo del mese selezionato
    return now.getDate();//ultimo giorno della settimana
    //getDate() restituisce il numero del giorno corrente
}