import { Action } from '@ngrx/store'

import * as AddUser from '../actions/user.actions';
import { User } from '../UserModel/user';


// Section 1


// Section 2
export function reducer(state: User[] = [], action: AddUser.Actions) {

    // Section 3
    switch(action.type) {
        case AddUser.ADD_USER:
            return [...state, action.payload];

        default:
            return state;
    }
}