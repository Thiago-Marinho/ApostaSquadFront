import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TimeAlterarComponent } from './components/time-alterar/time-alterar.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    ClienteComponent,
    TimeAlterarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
