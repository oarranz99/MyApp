import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tituloHtml'
})

export class TituloHtmlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

/*     let salida = '';
    if (args.length == 0){
        salida = '<h1>' + ${value} + '</h1>';
    } else if (args.length > 0) {
        salida = '<h1>' + ${value} + '</h1>';
    } */
     

    return null;
  }

}
