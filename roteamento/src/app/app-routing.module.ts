import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';

const routes: Routes = [
  {path: "primeira-pagina", component: PrimeiraPaginaComponent},
  {path: "segunda-pagina", component: SegundaPaginaComponent},
  {path: "", redirectTo:"primeira-pagina", pathMatch: "full"},
  {path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent},
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },

  {path: "**", component: PaginaNaoEncontradaComponent },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
