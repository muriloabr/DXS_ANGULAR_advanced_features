export class Produto {

    id: string;
    nome: string;
    valor: string;
    promocao: string;
    valorPromo: string;
    imagem: string;
    ativo: boolean;

    constructor(id: string, nome: string, valor: string, promocao: string, valorPromo: string, imagem: string) {
        this.id = id;
        this.valor = id;
        this.nome = id;
        this.promocao = id;
        this.valorPromo = id;
        this.imagem = imagem;
        this.ativo = true;
    }
    
}