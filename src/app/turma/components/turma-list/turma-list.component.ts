import { TurmaService } from './../../services/turma.service';
import { Turma } from './../../models/turma.model';
import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit {

  turmas: Turma[];
  paramEscolaId: string;

  constructor(private turmaService: TurmaService, private activatedroute: ActivatedRoute, public toast: Ng2IzitoastService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getEscolaId();
    this.loadTurmasService();
  }

  loadTurmasService(): void {
    this.spinner.show();
    this.turmaService.listarTodas(this.paramEscolaId).then(response => {
      this.turmas = response;
      this.spinner.hide();
    }).catch(error => {
      this.spinner.hide();
      this.toast.error(
        { title: "Não foi possível obter as turmas!", position: 'topRight' }
      );
    });
  }

  getEscolaId() {
    this.activatedroute.paramMap.subscribe(paramMap => {
      if (paramMap.get("id") != null) {
        this.paramEscolaId = paramMap.get("id");
      }
    });
  }

}
