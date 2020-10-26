import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { NgxSpinnerService } from 'ngx-spinner';
import { Turma } from '../../models/turma.model';
import { TurmaService } from '../../services/turma.service';

@Component({
  selector: 'app-turma-register',
  templateUrl: './turma-register.component.html',
  styleUrls: ['./turma-register.component.css']
})
export class TurmaRegisterComponent implements OnInit {

  formTurma: FormGroup;
  turmaModel: Turma;

  constructor(private formBuilder: FormBuilder, private activatedroute: ActivatedRoute, private turmaService: TurmaService, public toast: Ng2IzitoastService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formTurma = this.formBuilder.group({
      curso: [null, Validators.required],
      turno: [null, Validators.required],
      serie: [null, Validators.required],
      vagas: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.formTurma.valid) {
      this.turmaModel = new Turma();
      this.turmaModel.curso = this.formTurma.value.curso;
      this.turmaModel.turno = this.formTurma.value.turno;
      this.turmaModel.serie = this.formTurma.value.serie;
      this.turmaModel.vagas = this.formTurma.value.vagas;

      this.activatedroute.paramMap.subscribe(paramMap => {
        if (paramMap.get("id") != null) {
          this.turmaModel.escolaId = paramMap.get("id");
        }
      });
      this.sendRequestServie(this.turmaModel);
    } else {
      this.validateAllFormFields(this.formTurma);
    }
  }

  sendRequestServie(turma: Turma): void {
    this.spinner.show();
    this.turmaService.cadastrar(turma).then(response => {
      this.toast.success(
        { title: "Escola cadastrada com sucesso!", position: 'topRight' }
      );

      this.formTurma.reset();
      this.spinner.hide();
    }).catch(error => {
      this.spinner.hide();
      this.toast.error(
        { title: "Não foi possível cadastrar a escola!", position: 'topRight' }
      );
    });
  }

  isFieldValid(field: string): boolean {
    return !this.formTurma.get(field).valid && this.formTurma.get(field).touched;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
