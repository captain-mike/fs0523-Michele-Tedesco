import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title:'Home page'
  },
  {
    path:'chi-siamo',
    component: ChiSiamoComponent,
    title:'Pagina chi siamo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
