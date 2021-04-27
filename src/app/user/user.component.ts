import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import * as UserAction from '../actions/user.actions';
import { User } from '../UserModel/user';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../service/payment.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm: FormGroup;
  firstName:string;
 lastName;
 email;
 phoneNumber;
 monthlyAdBudget;
 submitted = false;
  ngOnInit() {
    this.myForm = this._formBuilder.group({
      firstName: new FormControl('' ,Validators.required),
      lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    monthlyAdBudget: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
    });
console.log(this.myForm)
  }
  get f() { return this.myForm.controls; }
  constructor(private store: Store<AppState>,private toastr: ToastrService,private paymentService:PaymentService
   , private _formBuilder: FormBuilder) {
 
  }
  data=[];
  onSubmit() {
    this.submitted = true;
 this.firstName=this.myForm.value.firstName;
 this.lastName=this.myForm.value.lastName;
 this.email=this.myForm.value.email;
 this.monthlyAdBudget=this.myForm.value.monthlyAdBudget;
 this.phoneNumber=this.myForm.value.phoneNumber;
  console.log(this.myForm.value)

  this.paymentService.saveUser(this.myForm.value)
  .subscribe(data => {
   this.data.push(data)

    console.log(this.data)
   
  })   
  if(this.data.length){
    this.toastr.success("Your details has been saved successfully")
  }
  if(this.data.length)
    this.store.dispatch(new UserAction.AddUser({firstName:this.firstName,lastName:this.lastName,
      email:this.email,monthlyAdBudget:this.monthlyAdBudget,phoneNumber:this.phoneNumber,}) )
  }
  clearForm() {
   this.myForm.reset();
    }
   
}
