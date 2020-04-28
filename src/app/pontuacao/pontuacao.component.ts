import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-pontuacao',
    templateUrl: './pontuacao.component.html',
    styleUrls: ['./pontuacao.component.scss']
})
export class PontuacaoComponent implements OnInit {

    listTimes = [];

    constructor(private api: ApiService,
        private firestore: AngularFirestore,
        private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.api.getAll("times").then((data: any) => {
            this.listTimes = data;
        })
    }

    atualizar() {
        for (let aux of this.listTimes) {
            let id = aux.uid;
            delete (aux.uid);

            this.firestore.collection<any>("times").doc(id).update(aux).then(() => {
                this._snackBar.open("Sucesso em atualizar os dados")
            }).catch(err => {
                this._snackBar.open("Erro em atualizar os dados")
                console.error(err);
            })
        }
    }
}
