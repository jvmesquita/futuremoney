import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/requisicao.service';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage implements OnInit {

  constructor(
    public requisicaoservice: RequisicaoService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  cadastrar(){
    this.requisicaoservice.cadastrar({
      nome:'',
      email:'',
      senha:'',
      datanasc:'',
      celular:'',
      cep:''
    }).subscribe(
      (response: any) => {
        if (response.status === 'sucesso'){
          this.router.navigate(['/criarconta2']);
        }else{
          // Exibir mensagem de erro.
        }
      }
    );
  }

}
