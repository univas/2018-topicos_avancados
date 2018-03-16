import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partidoPolitico'
})
export class PartidoPoliticoPipe implements PipeTransform {

  transform(value: string, fullName: boolean): string {
    if (!fullName) {
      return value;
    }

    let partidoName = null;
    value = value.toUpperCase();
    if (value == 'PT') {
      partidoName = 'PT - Partido dos Trabalhadores';

    } else if (value == 'PSDB') {
      partidoName = 'PSDB - Partido da Social Democracia Brasileira';
    
    } else if (value == 'PSC') {
      partidoName = 'PSC - Partido Social Cristão';
    
    } else if (value == 'PCdoB') {
      partidoName = 'PCdoB - Partido Comunista do Brasil';
    
    } else if (value == 'Rede') {
      partidoName = 'Rede - Rede Sustentabilidade';
    
    } else if (value == 'PMDB') {
      partidoName = 'PMDB - Partido do Movimento Democrático Brasileiro';
    
    } else if (value == 'DEM') {
      partidoName = 'DEM - Democratas';
    
    } else {
      partidoName = value + ' - Desconhecido';
    }

    return partidoName;
  }

}
