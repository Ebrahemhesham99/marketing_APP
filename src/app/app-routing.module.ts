import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

const routes: Routes = [
  { path: 'products', component: AllproductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'cart', component:  CartComponent},
  { path: 'details/:id', component:  ProductsDetailsComponent},
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
