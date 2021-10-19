import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TimeAlterarComponent } from './components/time-alterar/time-alterar.component';
import { ClienteAlterarComponent } from './components/cliente-alterar/cliente-alterar.component';
import { SituacaoAlterarComponent } from './components/situacao-alterar/situacao-alterar.component';
import { ApostaAlterarComponent } from './components/aposta-alterar/aposta-alterar.component';
import { EstadioAlterarComponent } from './components/estadio-alterar/estadio-alterar.component';
import { ResultadoApostaAlterarComponent } from './components/resultado-aposta-alterar/resultado-aposta-alterar.component';
import { PartidaAlterarComponent } from './components/partida-alterar/partida-alterar.component';
import { TimePartidaAlterarComponent } from './components/time-partida-alterar/time-partida-alterar.component';
import { ClienteService } from './services/cliente.service';
import { ApostaService } from './services/aposta.service';
import { EstadioService } from './services/estadio.service';
import { TimeService } from './services/time.service';
import { TimePartidaService } from './services/time-partida.service';
import { ResultadoApostaService } from './services/resultado-aposta.service';
import { PartidaService } from './services/partida.service';
import { SituacaoService } from './services/situacao.service';
import { ApostaComponent } from './components/aposta/aposta.component';
import { EstadioComponent } from './components/estadio/estadio.component';
import { PartidaComponent } from './components/partida/partida.component';
import { SituacaoComponent } from './components/situacao/situacao.component';
import { TimePartidaComponent } from './components/time-partida/time-partida.component';
import { ResultadoApostaComponent } from './components/resultado-aposta/resultado-aposta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    ClienteComponent,
    TimeAlterarComponent,
    ClienteAlterarComponent,
    SituacaoAlterarComponent,
    ApostaAlterarComponent,
    EstadioAlterarComponent,
    ResultadoApostaAlterarComponent,
    PartidaAlterarComponent,
    TimePartidaAlterarComponent,
    ApostaComponent,
    EstadioComponent,
    SituacaoComponent,
    PartidaComponent,
    ResultadoApostaComponent,
    TimePartidaComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ClienteService,
    ApostaService,
    EstadioService,
    TimeService,
    TimePartidaService,
    ResultadoApostaService,
    PartidaService,
    SituacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
