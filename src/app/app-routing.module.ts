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

const routes: Routes = [
  { path: "time", component: TimeComponent},
  { path: "time/alterar/:id", component: TimeAlterarComponent},
  { path: "aposta/alterar/:id", component: ApostaAlterarComponent},
  { path: "resultadoAposta/alterar/:id", component: ResultadoApostaAlterarComponent},
  { path: "estadio/alterar/:id", component: EstadioAlterarComponent},
  { path: "cliente/alterar/:id", component: TimeAlterarComponent},
  { path: "timePartida/alterar/:id", component: TimePartidaAlterarComponent},
  { path: "situacao/alterar/:id", component: SituacaoAlterarComponent},
  { path: "time/alterar/:id", component: TimeAlterarComponent},
  {path: "cliente", component:ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
