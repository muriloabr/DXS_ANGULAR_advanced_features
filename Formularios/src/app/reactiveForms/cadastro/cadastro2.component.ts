import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from './models/usuario';
import { utilsBr } from 'js-brasil';
import { CustomFormsModule, CustomValidators } from 'ng2-validation';
import { MensagensDeValidacao, MostrarMensagem, ValidadorGenerico }  from './validacao-formulario-generico';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html'
})

export class Cadastro2Component implements OnInit, AfterViewInit { 

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[]; //OBTENDO UMA COLEÇÃO DE ITENS DO FORMULARIO

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

  //USUARIO QUE O FORM VAI PRODUZIR PARA SER CADASTRADO NO FINAL DA SUBMISSAO PARA O END-POINT SERIZALIZADO EM JSON
  usuario!: Usuario;
  resultadoDoForm: string = '';
  //MASKS
  mascaras = utilsBr.MASKS;
  //VALIDAÇÕES AUTOMATIZADAS PELA CLASSE validacao-formulario-generico
  mensagensDeValidacao: MensagensDeValidacao;
  mostrarMensagem: MostrarMensagem = {};
  validadorGenerico: ValidadorGenerico;

  constructor(private formBuilderMeu: FormBuilder) {    
    
    this.mensagensDeValidacao = {
      nome: {
        required: 'O nome é requerido!',
        minLength: 'O nome deve ter pelo menos 3 letras'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };
    this.validadorGenerico = new ValidadorGenerico(this.mensagensDeValidacao);
  }

  ngAfterViewInit(): void { //AO TERMINAR DE CARREGAR E DISPONIBILIZAR A PAGINA PRO USER
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.cadastroForm.valueChanges, ...controlBlurs).subscribe(value => {
      this.mostrarMensagem = this.validadorGenerico.processarMensagens(this.cadastroForm);
    });

    /*
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')); //MUDANCA DE FOCUS 'BLUR' ELE FAZ VALIDACAO NO FORM
    merge(controlBlurs).subscribe(() => {
      this.mostrarMensagem = this.validadorGenerico.processarMensagens(this.cadastroForm);
    })*/
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