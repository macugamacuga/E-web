import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PassIDService}from '../services/pass-id.service'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { stringify } from '@angular/compiler/src/util';
import { Iproduct } from '../services/productModel';
import { Router,ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit
 {
   Svalue:any=1;
   Tprice:any;
   price:any;
   Dprice:any;

  change(value: number): void {
    console.log(value);
    this.Svalue=value;
    for( let Pdata of this.userdatas)
    this.price=Pdata.Price,
    this.Tprice=Pdata.Price*this.Svalue;
    this.Discount();
}
Discount(){
  if(this.Svalue==2 && this.Tprice>2000){
this.Dprice=0.95*this.Tprice;
}
if(this.Svalue==3 && this.Tprice>3000){
  this.Dprice=0.90*this.Tprice;
}
if(this.Svalue>=4 && this.Tprice>5000){
  this.Dprice=0.90*this.Tprice;
}
else {
this.Dprice=this.Tprice;
}
return this.Dprice;
}

  active :any;form: FormGroup;userdatas:any;data:any;
//image url
 ImageUrldata :any;
  //color radio
  Colordata:any;
  //cloth  radio
   ClothSizedata:any;
   //shoe dropdowm
   ShoeSizedata:number[]=[]; ShoeItems=[{}];  ShoeSettings!:IDropdownSettings;

   public id:any;Product:Iproduct|undefined;

   public isMobileResolution: boolean;  

  constructor(private http: HttpClient,private passID:PassIDService,private Route:ActivatedRoute,private fb: FormBuilder )
   {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
     this.form = this.fb.group({
    price:new FormControl()
   
}); }
public getIsMobileResolution(): boolean {
  return this.isMobileResolution;
}
  ngOnInit(): void {
    
this.getIsMobileResolution();

    this.ShoeSettings = {
      singleSelection: true,
    
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
    // console.log("result grid "+this.passID.getID());
   
    const routeParams= this.Route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParams.get('productId'));

      console.log("result id "+productIdFromRoute);
      this.ProductDetails( productIdFromRoute);
      
  }//get total amount / discount.
  
  ProductDetails(id:any)
  {
      // Initialize Params Object
      var myFormData = new FormData();
      //removing modal hiding
      // this.showuser = true;
    // Begin assigning parameters
    
    myFormData.append('userid', id);
    
    //user details post request
    return this.http.post(`${environment.apiUrl}assets/php/productDetails.php`
      , myFormData).subscribe(data => {
        this.userdatas=data ;
      
        console.log("data1 "+JSON.stringify(data));
      
        for(let data of this.userdatas){
          var ShoeSizeString=data.shoesize;
          var ClothSizeString=data.clothsize;
          var ColorString=data.color;
          var ImageUrlString=data.imageurl;
        }
        if(ClothSizeString!=null){
        this.ClothSizedata=ClothSizeString.split(',');
        }
        if(ShoeSizeString!=null){
this.ShoeSizedata=ShoeSizeString.split(',');
        }
        if(ColorString!=null){
this.Colordata=ColorString.split(',');
        }
        if(ImageUrlString!=null){
          this.ImageUrldata=ImageUrlString.split(',');
        }
console.log("ShoeSize "+ this.ShoeSizedata); 
console.log(" clothsize  "+ this.ClothSizedata);
console.log(" color "+(this.Colordata));
console.log(" image url "+(this.ImageUrldata));

        console.log("userdata "+JSON.stringify(this.userdatas));  
        console.log("userdata  no string"+this.userdatas.shoesize);  
   
      
      });
  }

}
