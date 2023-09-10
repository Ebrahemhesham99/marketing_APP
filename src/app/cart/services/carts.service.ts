import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  createNewCart(model:any) {
    return this.http.post('https://fakestoreapi.com/carts',model )
  }
  constructor(private http:HttpClient) { }
}
