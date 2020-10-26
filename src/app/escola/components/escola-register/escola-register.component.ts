import { EscolaService } from '../../services/escola.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Escola } from 'src/app/escola/models/escola.model';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-escola-register',
  templateUrl: './escola-register.component.html',
  styleUrls: ['./escola-register.component.css']
})
export class EscolaRegisterComponent implements OnInit {

  formEscola: FormGroup;
  escolaModel: Escola;

  constructor(private formBuilder: FormBuilder, private escolaService: EscolaService, public toast: Ng2IzitoastService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formEscola = this.formBuilder.group({
      prefixo: [null, Validators.required],
      nome: [null, Validators.required],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      numero: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formEscola.valid) {
      this.escolaModel = new Escola();
      this.escolaModel.prefixo = this.formEscola.value.prefixo;
      this.escolaModel.nome = this.formEscola.value.nome;
      this.escolaModel.rua = this.formEscola.value.rua;
      this.escolaModel.bairro = this.formEscola.value.bairro;
      this.escolaModel.numero = this.formEscola.value.numero;
      this.sendRequestServie(this.escolaModel);
    } else {
      this.validateAllFormFields(this.formEscola);
    }
  }

  sendRequestServie(escola: Escola): void {
    this.spinner.show();
    this.escolaService.cadastrar(escola).then(response => {
      this.toast.success(
        { title: "Escola cadastrada com sucesso!", position: 'topRight' }
      );

      this.formEscola.reset();
      this.spinner.hide();
    }).catch(error => {
      this.spinner.hide();
      this.toast.error(
        { title: "Não foi possível cadastrar a escola!", position: 'topRight' }
      );
    });
  }

  isFieldValid(field: string): boolean {
    return !this.formEscola.get(field).valid && this.formEscola.get(field).touched;
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
