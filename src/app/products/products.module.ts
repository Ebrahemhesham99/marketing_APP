import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { HttpClientModule } from  '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import {RouterModule} from '@angular/router';
import { SelectComponent } from '../shared/select/select.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
    declarations: [
        AllproductsComponent,
        ProductsDetailsComponent,
        ProductComponent,
    ],
    exports: [
        AllproductsComponent,
        ProductsDetailsComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        RouterModule,
    ]
})
export class ProductsModule { }
