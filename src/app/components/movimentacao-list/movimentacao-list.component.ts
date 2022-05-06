import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
  movimentacoes:any;
  constructor(private movService : MovimentacaoService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }

  listMovimentacoes():void{
    this.movService.list().subscribe(
      data =>{
        this.movimentacoes=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
