import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { OperandoComponent } from './operando/operando.component';
import { SumaComponent } from './suma/suma.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    OperandoComponent,
    SumaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
