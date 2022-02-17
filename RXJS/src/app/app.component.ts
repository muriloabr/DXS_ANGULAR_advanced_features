import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({ 
  selector: 'app-root',
  template: `
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <div style="text-align:center" class="content">
      <h1>
       {{title}}!
      </h1>
      <span style="display: block">Resultados serão apresentados no console do navegador</span>
      <img src="https://dataxstudios.com.br/assets/images/logo_DXS_400_190.png" alt="dxs" width="300"/> 
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    //PROMISE FAZ A REQUISIÇÃO, RETORNA SUCESO OU ERRO E FINALIZA, NECESSITANDO DE RECHAMAR PARA FAZER DE NOVO SE PRECISAR
    /*
    this.minhaPromise("angular")
      .then(resultadodissoaqui => console.log(resultadodissoaqui)
    );
    */
    /*
    this.minhaPromise("csharp")
      .then(resultadodissoaqui => console.log(resultadodissoaqui))
      .catch(resultadodeerrodissoaqui => console.log(resultadodeerrodissoaqui)
    ); //PROMISES PODEM RETORNAR ERRO ENTAO TRATA-SE COM CATCH
    */

    //OBSERVABLES FAZEM REQUISIÇÕES SEM PRECISAR FINALIZAR, CRIANDO UMA ASSINATURA DE CONTEUDO, NECESSITANDO CANCELAR ASSINATURAS MANUALMENTE
    /*
    this.minhaObservable("angular")
      .subscribe(resultadodissoaqui => console.log(resultadodissoaqui));
    */
    /*
    this.minhaObservable("chsarp")
      .subscribe( {
          next: (resultadodissoaqui) => console.log(resultadodissoaqui), //OBSERVABLES RETORNAM RESULTADOS ENTAO CAPTURA ASSIM
          error: (resultadodeerrodissoaqui) => console.log("Erro: " + resultadodeerrodissoaqui), //OBSERVABLES PODEM RETORNAR ERRO ENTAO TRATA-SE ASSIM
          complete: () => console.log("Completou essa Observable!!") //OBSERVABLES ENVIAM SINAL DE TAREFA COMPLETADA, RECEBA E TOME ALGUMA ATITUDE
      }
    ); 
    */
    
    const observadordissoaqui = { //OBSERVADOR PRONTO COM TODOAS OS PROCEDIMENTOS PARA CADA ESTÁGIO
      next: (valor: any) => console.log("NEXT: ", valor), 
      error: (erro: any) => console.log("ERROR: ", erro), //AO DETECTAR UM ERRO DA OBSERVABLE, PARAMOS DE RECEBER DADOS
      complete: () => console.log("COMPLETE!") //AO RECEBER UM COMPLETE HAVERA DESASSINATURA AUTOMATICA
    }
    /*
    const obs =
      this.minhaObservable("angular")
      .subscribe(observadordissoaqui);
    */
    const obsUsuario =
      this.minhaObservableUsuario("admin", "emaul@.com");
    const subsUsuario = obsUsuario.subscribe(observadordissoaqui);

    setTimeout(() => {
      subsUsuario.add( //ADD COLOCA ROTINAS PARA QUANDO ESTE OBSERVABLE TIVER O UNSUBSCRIBE() CHAMADO 
        ()=>console.log("Estamos assim: ", subsUsuario.closed?'fechada!':'aberta!')
      ); 
      subsUsuario.unsubscribe(); //DESASSINAR O RECEBIMENTO DE DADOS DE UMA OBSERVABLE      
    }, 4600);
  }
  title = 'RXJS | PROMISSES vs OBSERVABLES';

  minhaPromise(nome: string): Promise<string> { //METODO RETONA PROMISE()
    return new Promise((resolverissoaqui, rejectadordissaqui) => {
      if(nome == "angular"){
        setTimeout(() => {
          resolverissoaqui("Te conheco: " + nome)
          
        }, 1000);
      } else {
        setTimeout(() => {
          rejectadordissaqui("Voce não tem nome conhecido: " + nome);
        }, 2000);        
      }
    })
  }

  minhaObservable(nome: string): Observable<string> {
    return new Observable(assinatura => {
      if(nome === "angular"){
        assinatura.next("Conheço sim: " + nome); //ENVIO DE DADOS CAPTADOS NESTA ETAPA
      } else if(nome === "csharp") {
        assinatura.error("Esse: " + nome + " está com arte!"); //ENVIO DE ERRO
      } else {
        assinatura.error("Não é do Angular, então esse: " + nome + " está com arte também!"); //ENVIO DE ERRO
      }
      assinatura.next("Sou sua Observable!!"); //ASSINATURA PARA RECEBER DADOS
      setTimeout(() => {
        assinatura.next("Sou sua Observable com delay!!"); //ENVIO DE DADOS CAPTADOS NESTA ETAPA
        assinatura.complete(); //ENVIO DE STATUS QUE COMPLETOU TUDO!
      }, 2000);      
    });
  }

  minhaObservableUsuario(nome: string, email: string): Observable<Usuario> {
    return new Observable(assinatura => {
      if(nome === "admin") {
        let usuario = new Usuario(nome, email);
        setTimeout(() => {
          assinatura.next(usuario);
        }, 1500); 
        setTimeout(() => {
          assinatura.next(usuario);
        }, 4500); 
        setTimeout(() => {
          assinatura.complete();
        }, 7000); 
      } else {
        assinatura.error("Não é admin!");
      }
    });
  }
}

export class Usuario {

  nome: string;
  email: string;

  constructor(nome: string, email: string) {    
    this.nome = nome;
    this.email = email;
  }
}
