import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from './models/usuario';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit { 

  //VALIDACAO CUSTOMIZADA E COM COMPARACAO
  private senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
  private senhaConfirmacao = new FormControl('', [CustomValidators.equalTo(this.senha)]);
  //GRUPO DE COMPONENTES DO FORMULARIO, ATRELADO AO FORMULARIO HTML
  public cadastroForm: FormGroup = this.formBuilderMeu.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
    email: ['', [Validators.required, Validators.email]],
    senha: this.senha, //ATRIBUINDO CUSTOMIZACAO
    senhaConfirmacao: this.senhaConfirmacao //ATRIBUINDO CUSTOMIZACAO
  });
  /* //METODO DIRETO COM FORMGROUP RECEBENDO VARIOS FORMCONTROLs
    public cadastroForm: FormGroup = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      senhaConfirmacao: new FormControl('') 
    });
    */

  //USUARIO QUE O FORM VAI PRODUZIR PARA SER CADASTRADO NO FINAL DA SUBMISSAO PARA O END-POINT SERIZALIZADO EM JSON
  usuario!: Usuario;
  resultadoDoForm: string = '';
  //MASKS
  mascaras = utilsBr.MASKS;

  constructor(private formBuilderMeu: FormBuilder) { 
  }

  ngOnInit(): void { }

  adicionarUsuario() {
    //OUTRO METODO DE SEGURANÇA PARA SUBMETER O PROCESSAMENTO É ATESTANDO SE FOI dirty & valid
    if(this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.cadastroForm.value);
      this.resultadoDoForm = JSON.stringify(this.usuario);
    }    
  }
}