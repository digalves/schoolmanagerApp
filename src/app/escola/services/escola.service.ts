import { Escola } from 'src/app/escola/models/escola.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  url = environment.domain;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  async cadastrar(escola: Escola): Promise<any> {
    return await this.http.post<Escola>(this.url + "escolas", JSON.stringify(escola), this.httpOptions)
      .toPromise();
  }

  async listarTodas(): Promise<any> {
    return await this.http.get<Escola[]>(this.url + 'escolas', this.httpOptions)
      .toPromise();
  }

}
