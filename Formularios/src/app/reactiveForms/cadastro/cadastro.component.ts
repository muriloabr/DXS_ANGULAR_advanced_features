import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {
  
  cadastroForm!: FormGroup;

  constructor(private formBuilderMeu: FormBuilder) { 

  }

  ngOnInit(): void {
    /* //METODO DIRETO COM FORMGROUP RECEBENDO VARIOS FORMCONTROLs
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      senhaConfirmacao: new FormControl('')
    });
    */
    //METODO COM AUXILIO DO FORMBUILDER
    this.cadastroForm = this.formBuilderMeu.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    });
  }
  adicionarUsuario() {
    let x = this.cadastroForm.value;
  }

}
