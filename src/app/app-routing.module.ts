import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';


const routes: Routes = [

  {
    path: 'user',
    component:UserComponent,
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,UserModule]
})
export class UserRoutingModule { }