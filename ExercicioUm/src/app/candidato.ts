export class Candidato {

    nome : string;

    partido : string;

    profissao : string;

    constructor(nome?: string, partido?: string, profissao?: string) {
        this.nome = nome;
        this.partido = partido;
        this.profissao = profissao;
    }

}