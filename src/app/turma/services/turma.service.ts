import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Turma } from '../models/turma.model';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  url = environment.domain;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  async cadastrar(turma: Turma): Promise<any> {
    return await this.http.post<Turma>(this.url + "turmas", JSON.stringify(turma), this.httpOptions)
      .toPromise();
  }

  async listarTodas(escolaId: string): Promise<any> {
    return await this.http.get<Turma[]>(this.url + 'turmas/' + escolaId, this.httpOptions)
      .toPromise();
  }
}
