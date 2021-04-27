import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    email: new FormControl(''),
    monthlyAdBudget: new FormControl(''),
    phoneNumber: new FormControl('')
    });

  }
  constructor(private store: Store<AppState>,private toastr: ToastrService,private paymentService:PaymentService) {
 
  }
  data=[]
  onSubmit() {
 this.firstName=this.myForm.value.firstName;
 this.lastName=this.myForm.value.lastName;
 this.email=this.myForm.value.email;
 this.monthlyAdBudget=this.myForm.value.monthlyAdBudget;
 this.phoneNumber=this.myForm.value.phoneNumber;
  console.log(this.myForm.value)

  this.paymentService.saveUser(this.myForm.value)
  .subscribe(data => {
    console.log(data)
   
  })   
  this.toastr.success("Hello, I'm the toastr message.")
    
    this.store.dispatch(new UserAction.AddUser({firstName:this.firstName,lastName:this.lastName,
      email:this.email,monthlyAdBudget:this.monthlyAdBudget,phoneNumber:this.phoneNumber,}) )
  }
  clearForm() {
   this.myForm.reset();
    }
}
