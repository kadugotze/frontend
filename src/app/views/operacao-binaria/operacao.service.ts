import { Injectable } from '@angular/core';

import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Operacao } from './operacao.model';

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}
  baseUrl = "http://localhost:3001/registro";
 
  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 100000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["msg-success"],
    });
  }

  gravaRegistro(operacao: Operacao): Observable<Operacao> {
    return this.http.post<Operacao>(this.baseUrl, operacao)
  }

 
}
