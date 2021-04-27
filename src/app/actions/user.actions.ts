// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { User } from 'src/app/UserModel/user'



export const ADD_USER       = '[User] Add'
export class AddUser implements Action {
    readonly type = ADD_USER

    constructor(public payload: User) {}
}
export type Actions = AddUser ;