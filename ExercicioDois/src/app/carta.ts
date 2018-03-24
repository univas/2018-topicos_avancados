export class Carta {

    remetente: string;

    enderecoRemetente: string;

    cepRemetente: string;

    destinatario: string;

    enderecoDestinatario: string;

    cepDestinatario: string;

    content: string;

    constructor(remetente?: string, enderecoRemetente?: string, cepRemetente?: string, destinatario?: string, 
        enderecoDestinatario?: string, cepDestinatario?: string, content?: string ) {
        
        this.remetente = remetente;
        this.enderecoRemetente = enderecoRemetente;
        this.cepRemetente = cepRemetente;
        this.destinatario = destinatario;
        this.enderecoDestinatario = enderecoDestinatario;
        this.cepDestinatario = cepDestinatario;
        this.content = content;
    }
}