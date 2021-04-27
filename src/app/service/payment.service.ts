import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../UserModel/user';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseURL: string = "http://localhost:3000/";
  constructor(private http:HttpClient) { }
saveUser(user:User){
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(user);
  console.log(body)
  return this.http.post(this.baseURL , body,{'headers':headers})
}
}
