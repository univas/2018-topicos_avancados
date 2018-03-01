import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFilter'
})
export class CpfFilterPipe implements PipeTransform {

  transform(value: string, args?: any): string {

    let newValue = value.substring(0, 3) + '.' +
                  value.substring(3, 6) + '.' +
                  value.substring(6, 9) + '-' +
                  value.substring(9);

    return newValue;
  }

}
