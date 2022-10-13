import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {

  listArray = [
    { id: '1', nama: 'Andi', kota: 'Jakarta' },
    { id: '2', nama: 'Budi', kota: 'Bandung' }
  ];

  private listArray$ = new BehaviorSubject<any>(null);
  // private listArray$ = new BehaviorSubject<any>(this.listArray);
  selectedListArray$ = this.listArray$.asObservable();

  setListArray(data: any) {
    this.listArray$.next(data);
  }

  constructor() { }

  getData() {
    return this.listArray;
  }

  saveData(input: any) {
    this.listArray.push(input);
  }

  findDataByID(id: any) {
    return this.listArray.find(x => x.id == id);
  }

  updateData(input: any) {
    let index = this.listArray.findIndex(x => x.id == input.id);
    this.listArray[index] = input;
  }

  deleteData(id: any) {
    let index = this.listArray.findIndex(x => x.id == id);
    this.listArray.splice(index, 1);
  }

}
