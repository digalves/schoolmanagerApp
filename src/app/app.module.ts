import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { NgxSpinnerModule } from "ngx-spinner";
import { MostraErroCampoComponent } from './shared/components/mostra-erro-campo/mostra-erro-campo.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { EscolaRegisterComponent } from './escola/components/escola-register/escola-register.component';
import { EscolaListComponent } from './escola/components/escola-list/escola-list.component';
import { TurmaListComponent } from './turma/components/turma-list/turma-list.component';
import { TurmaRegisterComponent } from './turma/components/turma-register/turma-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EscolaRegisterComponent,
    EscolaListComponent,
    TurmaListComponent,
    TurmaRegisterComponent,
    MostraErroCampoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2IziToastModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
