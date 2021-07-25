import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassIDService {
ID:any;

  constructor() { }
setID(id:any){
this.ID=id;
}
  getID(){
    
    return  this.ID;
  }
}
