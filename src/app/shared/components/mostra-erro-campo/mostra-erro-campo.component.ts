import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostra-erro-campo',
  templateUrl: './mostra-erro-campo.component.html',
  styleUrls: ['./mostra-erro-campo.component.css']
})
export class MostraErroCampoComponent {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
