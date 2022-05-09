import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {
  hora:any;
  descricao:any;
  valor:any;
  tipo:any;

  correntistas:any;
  correntista:any;
  constructor(private movService : MovimentacaoService,
              private correntistaService : CorrentistaService,
              private router:Router) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
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

  save(): void {
    console.log(this.correntista)
    const movimentacao = {
      valor:this.valor,
      descricao:this.descricao,
      tipo:this.tipo,
      idConta:this.correntista.id,
      hora:this.hora

    };
    console.log(movimentacao);
    this.movService.create(movimentacao)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/movimentacao']); //após salvar volta para a tela inicial
        },
        error => {
          console.log(error);
        });
  }
}
