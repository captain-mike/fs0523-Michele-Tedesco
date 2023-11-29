import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabellaComponent } from './components/tabella/tabella.component';
import { FormComponent } from './components/form/form.component';
import { Comp1Component } from './argomento/comp1/comp1.component';
import { Comp2Component } from './argomento/comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    FormComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
