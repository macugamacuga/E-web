import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ProductService} from "../services/product.service";
import {Iproduct} from '../services/productModel'


@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit {

  
  public products:any =[];
  public productList:Iproduct[]=[];
  

  constructor(
    private productService: ProductService,
    private http:HttpClient,
    
  ) { 
   
  }

  ngOnInit(): void {
//     console.log("http connection")

//  this.productService.getProducts().subscribe(data=>{
//    this.products=data;
//    console.log(data)
//  },error  => console.log("fetch error"+error)
//  ); 
  } 
}