import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path : 'product', component: ProductComponent}, 
  {path : 'login', component: LoginComponent}, 
  {path : 'register', component: RegisterComponent}, 
  {path : 'success', component: SuccessComponent}, 
  {path : 'note', component: NoteComponent}, 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
