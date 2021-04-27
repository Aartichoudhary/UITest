import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { UserRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { reducer } from './reducers/user.reducers';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
   UserRoutingModule,
    FormsModule,
    HttpClientModule,
	ToastrModule.forRoot(),
  BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
    user : reducer
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
