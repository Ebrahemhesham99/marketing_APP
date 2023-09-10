import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ]
})
export class SharedModule { }
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './select/select.component';

