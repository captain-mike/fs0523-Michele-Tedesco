import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component implements OnInit {

  sub!:Subscription;

  ngOnInit(){

    const intervallo = new Observable(observer => {

      let count:number = 0;

      setInterval(() => {

        observer.next(count);

        if(count == 10){
          observer.complete()
        }

        if(count > 8){
          observer.error(new Error('Count è troppo grande'))
        }


        count++;
      },1000)



    })


    //salvo un riferimento all'iscrizione
    this.sub = intervallo
    .pipe(
      filter(x => (x as number) > 2),
      map(x => `Siamo al numero ${x}`)
    )
    .subscribe({
      next: res => console.log(res),
      error: error => console.error(error),
      complete: () => console.log('%c Completato','color:red')
    })


  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
