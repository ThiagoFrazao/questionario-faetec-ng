import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GraficoResultadoComponent} from "./grafico/grafico-resultado.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'quiz/sucesso', component: GraficoResultadoComponent },
  { path: 'quiz', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
