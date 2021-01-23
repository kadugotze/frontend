import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { from } from "rxjs";
import { HomeComponent } from "./views/home/home.component";
import { OperacaoBinariaComponent } from "./views/operacao-binaria/operacao-binaria.component";
import { RealizandoOperacaoComponent } from "./views/realizando-operacao/realizando-operacao.component";



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "operacao",
    component: OperacaoBinariaComponent
  },
  {
    path: "realizando",
    component: RealizandoOperacaoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
