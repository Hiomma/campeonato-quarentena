import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    displayedColumns: string[] = ['posicao', 'nome', "jogos", 'pontos'];
    dataSource = [];

    constructor(private api: ApiService) { }

    ngOnInit(): void {
        this.api.getAll("times").then((data: any) => {
            data = data.sort((a, b) => a.pontos < b.pontos ? 1 : a.pontos > b.pontos ? -1 : 0)
            data.forEach((element, index) => element.posicao = index + 1)

            this.dataSource = data;
        })
    }

}
