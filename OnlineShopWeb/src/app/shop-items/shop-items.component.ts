import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { ProductService} from "../services/product.service";
import {Iproduct} from '../services/productModel'
import { error } from 'selenium-webdriver';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { PassIDService } from '../services/pass-id.service';


@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.scss']
})
export class ShopItemsComponent implements OnInit {
  
  searchText:any;
  
  public products:any =[];
  public productList:Iproduct[]=[];
  

  constructor(
    private productService: ProductService,
    private http:HttpClient,
   
    private passId:PassIDService
  ) { 
   
  }

  ngOnInit(): void {
    console.log("http connection")

 this.productService.getProducts().subscribe(data=>{
   this.products=data;
   
   console.log("data"+JSON.stringify(data));
 },error  => console.log("fetch error"+error)
 ) 
  }
  onDelete(productList:Iproduct):void{
    
  }
  onclick(Id:any){
    console.log("dell clicked") 
    //this.passId.setID(Id);
    
  }
// firebas{e 
  // getProducts():void{
  //  this.fireBaseService.getProducts().subscribe((res)=>{
  //      this.productList=res.map((product)=>{
  //      return{
  //          id: product.payload.doc.id ,
  //         ...product.payload.doc.data() as Iproduct 
         
  //          }as Iproduct;
           
  //      });
  //      console.log(this.productList)
  //    });

  // }



}
