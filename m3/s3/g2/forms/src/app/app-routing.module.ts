import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forms1Component } from './forms1/forms1.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { Forms2Component } from './forms2/forms2.component';

const routes: Routes = [
  {
    path:'',
    component: Forms1Component
  },
  {
    path:'forms2',
    component: Forms2Component
  },
  {
    path:'reactive-forms',
    component: ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
