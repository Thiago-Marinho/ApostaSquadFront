import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApostaAlterarComponent } from './components/aposta-alterar/aposta-alterar.component';
import { EstadioAlterarComponent } from './components/estadio-alterar/estadio-alterar.component';
import { ResultadoApostaAlterarComponent } from './components/resultado-aposta-alterar/resultado-aposta-alterar.component';
import { SituacaoAlterarComponent } from './components/situacao-alterar/situacao-alterar.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TimeAlterarComponent } from './components/time-alterar/time-alterar.component';
import { TimePartidaAlterarComponent } from './components/time-partida-alterar/time-partida-alterar.component';
import { TimeComponent } from './components/time/time.component';
import { ApostaComponent } from './components/aposta/aposta.component';
import { EstadioComponent } from './components/estadio/estadio.component';
import { PartidaComponent } from './components/partida/partida.component';
import { ResultadoApostaComponent } from './components/resultado-aposta/resultado-aposta.component';
import { SituacaoComponent } from './components/situacao/situacao.component';
import { TimePartidaComponent } from './components/time-partida/time-partida.component';
import { ClienteAlterarComponent } from './components/cliente-alterar/cliente-alterar.component';
import { PartidaAlterarComponent } from './components/partida-alterar/partida-alterar.component';

const routes: Routes = [
  { path: "time", component: TimeComponent},
  { path: "time/alterar/:id", component: TimeAlterarComponent},
  { path: "aposta/alterar/:id", component: ApostaAlterarComponent},
  { path: "resultadoAposta/alterar/:id", component: ResultadoApostaAlterarComponent},
  { path: "estadio/alterar/:id", component: EstadioAlterarComponent},
  { path: "cliente/alterar/:id", component: ClienteAlterarComponent},
  { path: "timePartida/alterar/:id", component: TimePartidaAlterarComponent},
  { path: "partida/alterar/:id", component: PartidaAlterarComponent},
  { path: "situacao/alterar/:id", component: SituacaoAlterarComponent},
  { path: "time/alterar/:id", component: TimeAlterarComponent},
  {path: "cliente", component: ClienteComponent},
  { path: "aposta", component: ApostaComponent},
  { path: "estadio", component: EstadioComponent},
  { path: "partida", component: PartidaComponent},
  { path: "resultadoAposta", component: ResultadoApostaComponent},
  { path: "situacao", component: SituacaoComponent},
  { path: "timePartida", component: TimePartidaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
