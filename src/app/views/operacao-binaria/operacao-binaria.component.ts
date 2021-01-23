
// import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-operacao-binaria',
  templateUrl: './operacao-binaria.component.html',
  styleUrls: ['./operacao-binaria.component.css']
})
export class OperacaoBinariaComponent implements OnInit {

  constructor(private router: Router) {
    // headerService.headerData = {
    //   title: 'Cadastro de Produtos',
    //   icon: 'storefront',
    //   routeUrl: '/products'
    // }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/realizando'])
  }

}
