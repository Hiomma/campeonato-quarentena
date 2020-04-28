import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PontuacaoRoutingModule } from './pontuacao-routing.module';
import { PontuacaoComponent } from './pontuacao.component';



@NgModule({
    declarations: [PontuacaoComponent],
    imports: [
        CommonModule,
        FormsModule,
        PontuacaoRoutingModule,
        MaterialModule
    ]
})
export class PontuacaoModule { }
