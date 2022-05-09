import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
  correntistas:any;
  correntista:any;
  movimentacoes:any;
  constructor(private movService : MovimentacaoService,
              private correntistaService : CorrentistaService) { }

  ngOnInit(): void {
    //this.listMovimentacoes();
    this.exibirCorrentistas();
  }

  listMovimentacoes():void{
    // lista todas as movimentações por ID da conta
    this.movService.findByIdConta(this.correntista.id).subscribe(
      data =>{
        this.movimentacoes=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
