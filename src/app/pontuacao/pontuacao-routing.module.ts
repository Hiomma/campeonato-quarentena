import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PontuacaoComponent } from './pontuacao.component';


const routes: Routes = [
    { path: "", component: PontuacaoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PontuacaoRoutingModule { }
