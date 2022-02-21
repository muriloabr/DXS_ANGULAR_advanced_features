import { FormGroup } from '@angular/forms';

export class ValidadorGenerico {

    constructor(private mensagemDeValidacao: MensagensDeValidacao) { } //RECEBE MensagensDeValidacao A COLECAO EM MATRIZ DE KEY: [KEY VALUE]

    processarMensagens(formulario: FormGroup): { [key: string]: string } {
        let todasMensagens = {};

        for (let nomeDoControleInternoAtual in formulario.controls) { //PARA CADA CONTROLE DENTRO DO FORMULARIO

            if (formulario.controls.hasOwnProperty(nomeDoControleInternoAtual)) { //SE HÁ UM CONTROLE COM A PROPRIEDADE IGUAL AO NOME DELE

                let controleCapturado = formulario.controls[nomeDoControleInternoAtual];//CAPTURO ESSE CONTROLE

                if (controleCapturado instanceof FormGroup) { //SE É UM FORMULARIO EMBUTIDO [FormGroup]
                    let mensagensInterna = this.processarMensagens(controleCapturado); //RECEBO TODAS AS MENSAGENS DESSE FORMULARIO
                    Object.assign(todasMensagens, mensagensInterna); //COLOCO UM OBJETO SEPARADO, COM TODAS MENSAGENS DOS CONTROLES INTERNOS DESTE FORMULARIO 
                } else { //SE FOR OUTRA INSTACIA COMO FormControl
                    if (this.mensagemDeValidacao[nomeDoControleInternoAtual]) { //SE EXISTE UMA MENSAGEM DE VALIDACAO PARA ESTE ITEM DO FORMULARIO
                        todasMensagens[nomeDoControleInternoAtual] = ''; //CRIO OU ZERO O ESPAÇO DENTRO DE todasMensagens COM O MESMO NOME DO CONTROLE ATUAL
                        if ((controleCapturado.dirty || controleCapturado.touched) && controleCapturado.errors) { //SE CONTROLE CAPTURADO TEM ERRO PARA EXIBIR
                            Object.keys(controleCapturado.errors).map(messageKey => { //LISTO SÓ AS KEYS DO ARRAY DE ERRORS DO CONTROLE CAPTURADO
                                /*PARA CADA messageKey LISTADA EXECUTO UMA AÇÃO USANDO MAP: SE NA mensagemDeValidacao CONTEM O CONTROLE CITADO E A messageKey REFERENTE ENTÃO..*/
                                if (this.mensagemDeValidacao[nomeDoControleInternoAtual][messageKey]) { 
                                    todasMensagens[nomeDoControleInternoAtual] += this.mensagemDeValidacao[nomeDoControleInternoAtual][messageKey] + '<br />'; 
                                    /*...RECEBO EM todasMensagens COM A [KEY] = [O NOME DO CONTROLE ATUAL], AS MENSAGENS DE VALIDACAO DE mensagemDeValidacao 
                                    QUE PASSARAM PELO FILTRO IF DO MAP*/
                                }
                            });
                        }
                    }
                }
            }
        }
        return todasMensagens; //RETORNO TODOS OS ERROS CATALOGADOS POR NOME DO COMPONENTE
    }
}

export interface MostrarMensagem { //COLECAO KEY VALUE TIPO STRING
    [key: string]: string
}
export interface MensagensDeValidacao { //COLECAO EM MATRIZ DE KEY: [KEY VALUE]
    [key: string]: { [key: string]: string }  
}
