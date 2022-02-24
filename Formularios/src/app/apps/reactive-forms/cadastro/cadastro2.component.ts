//BASE
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
//VALIDADORES E MASCARAS
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
//INTERFACE
import { Usuario } from './models/usuario';
//VALIDACAO AUTOMATICA
import { MensagensDeValidacao, MostrarMensagem, ValidadorGenerico }  from './validacao-formulario-generico';
//EVENTOS E OBSERVABLES
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html'
})

export class Cadastro2Component implements OnInit, AfterViewInit { 

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[]; //OBTENDO UMA COLEÇÃO DE ITENS DO FORMULARIO

  //VALIDACAO CUSTOMIZADA E COM COMPARACAO
  private senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
  private senhaConfirmacao = new FormControl('', [Validators.required, CustomValidators.equalTo(this.senha)]);
   //USUARIO QUE O FORM VAI PRODUZIR PARA SER CADASTRADO NO FINAL DA SUBMISSAO PARA O END-POINT SERIZALIZADO EM JSON
  private usuario!: Usuario;
  public resultadoDoForm: string = '';
  //VARIAVEL QUE CARREGA A BIBLIOTECA DE MASCARAS BR DE CAMPOS COMO CPF, CNPJ, ETC
  public mascaras = utilsBr.MASKS;
  //VALIDAÇÕES AUTOMATIZADAS PELA CLASSE validacao-formulario-generico
  private mensagensDeValidacao: MensagensDeValidacao;
  public mostrarMensagem: MostrarMensagem = {};
  private validadorGenerico: ValidadorGenerico; 
  //GRUPO DE COMPONENTES DO FORMULARIO, ATRELADO AO FORMULARIO HTML
  public cadastroForm: FormGroup = this.formBuilderMeu.group({
    nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
    cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
    email: ['', [Validators.required, Validators.email]],
    senha: this.senha, //ATRIBUINDO CUSTOMIZACAO
    senhaConfirmacao: this.senhaConfirmacao //ATRIBUINDO CUSTOMIZACAO
  });
 
  constructor(private formBuilderMeu: FormBuilder) {   
    //DEFININDO AS MENSAGENS DE ERRO PARA CADA PROPRIEDADE DE ERRO, EM LETRA MINUSCULA
    this.mensagensDeValidacao = {
      nome: {
        required: 'Seu nome é requerido',
        minlength: 'Seu nome precisa ter no mínimo 3 caracteres',
        maxlength: 'Seu nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe seu CPF',
        cpf: 'Este CPF está inválido'
      },
      email: {
        required: 'Informe seu melhor e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangelength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        equalto: 'As senhas digitas não conferem'
      }
    };
    //ATRELANDO AS MENSAGENS DE VALIDACAO A CADA COMPONENTE
    this.validadorGenerico = new ValidadorGenerico(this.mensagensDeValidacao);
  }

  ngAfterViewInit(): void { //AO TERMINAR DE CARREGAR E DISPONIBILIZAR A PAGINA PRO USUARIO
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
 
    // Merge the blur event observable with the valueChanges observable
    merge(...controlBlurs).subscribe(value => {
      this.mostrarMensagem = this.validadorGenerico.processarMensagens(this.cadastroForm);
    });1
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