import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Iproduct} from "../services/productModel";
import { BehaviorSubject, Observable } from 'rxjs';
import { error } from 'selenium-webdriver';
import { Users } from "../services/user";
import { map } from 'rxjs/Operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private userSubject: BehaviorSubject<Users>;
  public user: Observable<Users>;
  constructor
  (
    //public users:any,
    private router: Router,
    private http:HttpClient
    )
     { 
      this.userSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('user')||'{}'));
        this.user = this.userSubject.asObservable();
    }
    public get userValue(): Users {
      console.log("uservalue "+JSON.stringify(this.userSubject.value));
      return this.userSubject.value;
  }
getProducts(): Observable<Iproduct[]>{

  return this.http.get<Iproduct[]>(`${environment.apiUrl}assets/php/list.php`);
 
}
setProducts(Product:any){
  console.log(" servics product "+Product);
  //console.log(" servics prod Name "+Product.value.Name);

  var newProduct=JSON.stringify(Product);


  console.log(" servics string product "+Product.Name);
  let formData=new FormData();
  formData.append('Name',Product.Name);
  formData.append('Description',Product.Description);
  formData.append('Category',Product.Category);
  formData.append('Price',Product.Price);
  formData.append('imageUrl',Product.imageUrl);

  console.log("servics formData"+formData);


  return this.http.post<any>(`${environment.apiUrl}assets/php/addProduct.php`,JSON.stringify(formData)).subscribe(( result )=>
  {
    console.log("servics formData"+formData);
    console.log("post result"+result)
    return result;
    
  },
  error=>{
console.log(error);
  }
  );
  
}

login(email:any, password:any) {
  console.log("users "+email);
  return this.http.post<any>(`${environment.apiUrl}assets/php/login.php`, { email, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user.FirstName));
         this.userSubject.next(user);
          console.log("users ls "+JSON.stringify(user.FirstName));
          return user;
      }));
}
logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('user');
 //this.userSubject.next(JSON.parse(''));
 console.log("logout "+this.userSubject.value)
  this.router.navigate(['/login']);
}

register(user: Users) {
  console.log("regester user "+JSON.stringify(user.firstname));
  return this.http.post(`${environment.apiUrl}assets/php/register.php`, user);
  
}

//token
setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  } 

}
