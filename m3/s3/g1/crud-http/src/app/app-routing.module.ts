import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ListaComponent } from './pages/lista/lista.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';
import { Page404Component } from './pages/page404/page404.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'menu',
    component: MenuComponent,
    children:[
      {
        path:'',// "/menu"
        component:ListaComponent
      },
      {
        path: 'edit/:id',// "/menu/edit/:id"
        component: EditComponent
      },
      {
        path:'crea-pizza',// "/menu/crea-pizza"
        component: CreateComponent
      }
    ]
  },
  {
    path:'**',//è la pagina non found
    component: Page404Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
