import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
 
   
  ]
})
export class UserModule { }
