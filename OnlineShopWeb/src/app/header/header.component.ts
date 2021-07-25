import { Component, OnInit } from '@angular/core';
import {Users  } from "../services/user";
import { ProductService } from "../services/product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  currentUser: any;
 public show=false;
public date=new Date;

  constructor
  ( private router: Router,
    private accountService:ProductService,

  ) { 
   this.currentUser=localStorage.getItem('user')|| null;
    
    
  
  }


  ngOnInit(): void {
    if(this.currentUser!=null){
      this.show=true;
    }
  }
  Logout():void{
    
this.accountService.logout();
this.ngOnInit();

  }
  
  

}
