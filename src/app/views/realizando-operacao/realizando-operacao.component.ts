import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMapTo } from 'rxjs/operators';
import { Operacao } from '../operacao-binaria/operacao.model';
import { OperacaoService } from '../operacao-binaria/operacao.service';

@Component({
  selector: 'app-realizando-operacao',
  templateUrl: './realizando-operacao.component.html',
  styleUrls: ['./realizando-operacao.component.css']
})
export class RealizandoOperacaoComponent implements OnInit {

  operacao: Operacao = {
    operacao: "",
    parametro1: 0,
    parametro2: 0

  }



  constructor(private router: Router, private operacaoService: OperacaoService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/operacao'])
  }

  gravaRegistro(): void {

    resultado: Number;

    switch (this.operacao.operacao) {
      case "+": {
        let num1 = "0b" + this.operacao.parametro1.toString(10)
        let num2 = "0b" + this.operacao.parametro2.toString(10)

       let soma = +num1.toString() + +num2.toString()
        // console.log(+num1.toString())
        //QUANDO TIVEREM CORRIJINDO ESSE CODIGO ESSA PARTE AQUI LEVEM EM CONSIDERAÇÃO FIQUEI 2H PARA CONSEGUIR UMA FORMA FAZER ESSA OPERAÇÃO COM BINARIOS KKKK 
        // console.log(+num2.toString())
        // console.log(soma.toString(2))
        // console.log(soma)
          this.operacaoService.gravaRegistro(this.operacao).subscribe(() => {
          this.operacaoService.showMessage("O resultado da Operação é " + soma.toString(2))
          this.router.navigate(['/operacao'])
        })


        break;
      }
      case "-": { 
        let num1 = "0b" + this.operacao.parametro1.toString(10)
        let num2 = "0b" + this.operacao.parametro2.toString(10)

       let soma = +num1.toString() - +num2.toString()
       
          this.operacaoService.gravaRegistro(this.operacao).subscribe(() => {
          this.operacaoService.showMessage("O resultado da Operação é " + soma.toString(2))
          this.router.navigate(['/operacao'])
        })


        break;
      } 
      case "*": { 
        let num1 = "0b" + this.operacao.parametro1.toString(10)
        let num2 = "0b" + this.operacao.parametro2.toString(10)

       let soma = +num1.toString() * +num2.toString()
       
          this.operacaoService.gravaRegistro(this.operacao).subscribe(() => {
          this.operacaoService.showMessage("O resultado da Operação é " + soma.toString(2))
          this.router.navigate(['/operacao'])
        })


        break;
      } 
      case "/": { 
        let num1 = "0b" + this.operacao.parametro1.toString(10)
        let num2 = "0b" + this.operacao.parametro2.toString(10)

       let soma = +num1.toString() / +num2.toString()
       
          this.operacaoService.gravaRegistro(this.operacao).subscribe(() => {
          this.operacaoService.showMessage("O resultado da Operação é " + soma.toString(2))
          this.router.navigate(['/operacao'])
        })


        break;
      } 
      case "%": { 
        let num1 = "0b" + this.operacao.parametro1.toString(10)
        let num2 = "0b" + this.operacao.parametro2.toString(10)

       let soma = +num1.toString() % +num2.toString()
       
          this.operacaoService.gravaRegistro(this.operacao).subscribe(() => {
          this.operacaoService.showMessage("O resultado da Operação é " + soma.toString(2))
          this.router.navigate(['/operacao'])
        })


        break;
      } 

      default: {
        this.operacaoService.showMessage("Operação invalida !! Infome +, - , * , / , % ")
        break;
      }
    }

    // this.operacaoService.gravaRegistro(this.operacao).subscribe(() => {
    //   this.operacaoService.showMessage("exibirResultado")
    //   this.router.navigate(['/realizando'])
    // })
  }


}
