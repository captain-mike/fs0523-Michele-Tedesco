import { Pizza } from './Models/pizza';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizza } from './Models/ipizza';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizza';

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<iPizza[]>{
    return this.http.get<iPizza[]>(this.apiUrl);
  }

  getAllNames():Observable<string[]>{
    return this.http.get<iPizza[]>(this.apiUrl)
    .pipe(map(pArr => pArr.map(p => p.gusto)))
  }

  getById(id:string):Observable<iPizza>{
    return this.http.get<iPizza>(this.apiUrl + `/${id}`);
  }

  create(pizza:Partial<iPizza>):Observable<iPizza>{
    return this.http.post<iPizza>(this.apiUrl,pizza);
  }

  edit(pizza:iPizza){
    return this.http.put<iPizza>(this.apiUrl + `/${pizza.id}`,pizza);
  }

  delete(id:string){
    return this.http.delete<iPizza>(this.apiUrl + `/${id}`);
  }

}
