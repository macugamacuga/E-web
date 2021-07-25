import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {Iproduct} from '../services/productModel';
import { finalize  } from "rxjs/Operators";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../services/product.service";
import { environment } from '../../environments/environment';





@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
//DROPDOWN shoe size

   dropdownList:number[]=[];
    selectedItems = [{ 
    }];
    dropdownSettings!: IDropdownSettings;
    //dropdown cloth size 
    ClothSize=[
     'S','M','L','XL','XXL'];
    clothItems=[{}];
    clothSettings!:IDropdownSettings;
//COLOR PICKER
colorPicker1="";
colorPicker2="";
colorPicker3="";
colorPicker4="";




private url:any='http://localhost/onlineshop/';

 //log(x:any) {console.log(x);}
  Categorys = [
    {id: 1, Categorys: "Footware"},
    {id: 2, Categorys: "Clothes"},
    {id: 3, Categorys: "kitchen appliances"},
    {id: 4, Categorys: "bedding"},
    {id: 5, Categorys: "bags"}
  ];
  Category = null;

  urls:string[]=[]
  imageresult:any =null;
formDataB:FormGroup;
path:string[]=[];
productModel=new Iproduct(new Number,'','',new Number,'','','','','','','',[],[] );

  constructor(
    private http:HttpClient,
    private formModule:FormsModule ,
    formBuilder:FormBuilder,
    private productService:ProductService
    ) {

      

    this.formDataB=formBuilder.group({
Name:new FormControl(),
Description:new FormControl(),
Price:new FormControl(),
imageUrl:new FormControl(),
colorPicker:new FormControl(),
shoeSize:new FormControl(),
clothSize:new FormControl()  

    });
  }
 
  
  
 
  ngOnInit() {
    for(let i=22;i<=46;i++){
      this.dropdownList.push( i)
    }
    console.log("drop "+ this.dropdownList); 
    
   
   
    this.dropdownSettings = {
      singleSelection: false,
     
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };

    
    this.clothSettings = {
      singleSelection: false,
    
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit(Product:any){
    const formData=new FormData();
    console.log("path "+this.path[1])
  for(let i=0;i<this.path.length;i++){
    formData.append('img[]',this.path[i]);

  }
  formData.append('pName', Product.Name);
  formData.append('Description',Product.Description);
  formData.append('Price',JSON.stringify(Product.Price));
formData.append('Category',Product.Category);
formData.append('Color1',Product.colorPicker1);
formData.append('Color2',Product.colorPicker2);
formData.append('Color3',Product.colorPicker3);
formData.append('Color4',Product.colorPicker4);
for(let i=0;i<Product.shoeSize.length;i++){
  formData.append('ShoeSize[]',JSON.stringify(Product.shoeSize[i])); 

}
for(let i=0;i<Product.clothSize.length;i++){
  formData.append('ClothSize[]',JSON.stringify(Product.clothSize[i]));  

}






  console.log("servics formData "+this.path[1]);
  formData.forEach((value,key)=>{
    console.log(key+' '+ value);
  });

  return this.http.post<any>(`${environment.apiUrl}assets/php/uploadImage.php`,formData).subscribe(( result )=>
  {
   
    return result;
    
  },
  error=>{
console.log(error);
  }
  );
console.log("addP ts"+JSON.stringify(Product)); 

//this.productService.setProducts(Product);


// var newProduct=JSON.stringify(Product);
// let fd=new FormData();
// fd.append("Name","william");
// console.log("formdata "+fd)
// this.http.post('http://localhost/onlineshop/addProduct.php',{name,Description,}).subscribe((data)=>{

//   console.log("post result"+data)
// }, (error)=>{
//   console.log("post error: "+JSON.stringify(error));
// }
// )

  
  
}

  



 
upload(event:any){
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = (event:any) => {
               
                 this.urls.push(event.target.result); 
              }

              reader.readAsDataURL(event.target.files[i]);
              this.imageresult=event.target.files[i];

              this.path.push(this.imageresult);
              
      }
      console.log(this.path);
      
    
  }
    
    }
}
