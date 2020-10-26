import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { NgxSpinnerService } from 'ngx-spinner';
import { Escola } from '../../models/escola.model';
import { EscolaService } from '../../services/escola.service';

@Component({
  selector: 'app-escola-list',
  templateUrl: './escola-list.component.html',
  styleUrls: ['./escola-list.component.css']
})
export class EscolaListComponent implements OnInit {

  escolas: Escola[];

  constructor(private escolaService: EscolaService, public toast: Ng2IzitoastService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadEscolasService();
  }

  loadEscolasService(): void {
    this.spinner.show();
    this.escolaService.listarTodas().then(response => {
     this.escolas = response;
     this.spinner.hide();
    }).catch(error => {
      this.spinner.hide();
      this.toast.error(
        { title: "Não foi possível obter as escolas!", position: 'topRight' }
      );
    });
  }

}
