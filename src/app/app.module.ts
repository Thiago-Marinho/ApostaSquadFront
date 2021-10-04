import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TimeAlterarComponent } from './components/time-alterar/time-alterar.component';
import { FormsModule } from '@angular/forms';
import { ApostaComponent } from './components/aposta/aposta.component';
import { EstadioComponent } from './components/estadio/estadio.component';
import { SituacaoComponent } from './components/situacao/situacao.component';
import { PartidaComponent } from './components/partida/partida.component';
import { TimePartidaComponent } from './components/time-partida/time-partida.component';
import { ResultadoApostaComponent } from './components/resultado-aposta/resultado-aposta.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    ClienteComponent,
    TimeAlterarComponent,
    ApostaComponent,
    EstadioComponent,
    SituacaoComponent,
    PartidaComponent,
    TimePartidaComponent,
    ResultadoApostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
