import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TimeAlterarComponent } from './components/time-alterar/time-alterar.component';
import { TimeComponent } from './components/time/time.component';

const routes: Routes = [
  { path: "time", component: TimeComponent},
  { path: "time/alterar/:id", component: TimeAlterarComponent},
  {path: "cliente", component:ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
