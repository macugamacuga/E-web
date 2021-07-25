import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from "./Account/login/login.component";
import { RegisterComponent } from './Account/register/register.component';

import { AuthGuard } from './_helper/auth.guard'

const accountModule = () => import('./Account/account.module').then(x => x.AccountModule);
const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},

{path:"shop",component:ShopComponent,canActivate: [AuthGuard]},
// {path:"login",component:LoginComponent},
// {path:"register",component:RegisterComponent},
{path:'home',component:HomeComponent},
{path:"addproduct",component:AddProductComponent,canActivate: [AuthGuard]},
{path:"Details/:productId",component:ProductDetailsComponent},
{path:"**",component:PageNotFoundComponent},
{ path: 'account', loadChildren: accountModule },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponets=[HomeComponent,ShopComponent,AddProductComponent,ProductDetailsComponent
  // ,LoginComponent,RegisterComponent
]

