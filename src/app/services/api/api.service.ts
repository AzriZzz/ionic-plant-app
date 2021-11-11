import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    { id: 1, name: 'Aloe Plant', price: 700, category: 'India', img: 'assets/img/aloe.png'},
    { id: 2, name: 'Echeveria', price: 500, category: 'India', img: 'assets/img/2.png'},
    { id: 3, name: 'Snake Plant', price: 700, category: 'USA', img: 'assets/img/3.png'}
  ];

  constructor() { }

  getItem( id ) {
    // eslint-disable-next-line eqeqeq
    const item = this.items.find( x => x.id == id);
    return item;
  }
}
