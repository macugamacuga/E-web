import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule,routeComponets } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { FooterComponent} from './footer/footer.component';
import { ProductCategotyComponent } from './product-categoty/product-categoty.component';
import { SearchComponent } from './search/search.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { SingleShopItemComponent} from './single-shop-item/single-shop-item.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RelatedProductComponent } from './related-product/related-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { LoginComponent } from './Account/login/login.component';
// import { RegisterComponent } from './Account/register/register.component';











@NgModule({
  declarations: [
  
    AppComponent,
   routeComponets,
   HeaderComponent,
   FooterComponent,
   ProductCategotyComponent,
   SearchComponent,
   ShopItemsComponent,
   SingleShopItemComponent,
   AddProductComponent,
   ProductDetailsComponent,
   PageNotFoundComponent,
   RelatedProductComponent,
  //  LoginComponent,
  //  RegisterComponent,
   
   
   
  
   
   
   
      
   
   
  ],
  imports: [
    Ng2SearchPipeModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    FormsModule,
ColorPickerModule,
    BrowserModule,
    AppRoutingModule,
    NgxNumberSpinnerModule,
    ReactiveFormsModule,
   
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        NgbModule,
      

        
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

