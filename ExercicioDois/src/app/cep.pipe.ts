import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: string): string {

    let cep = value.substring(0, 2) + '.' +
              value.substring(2, 5) + '-' +
              value.substring(5);

    return cep;
  }

}
