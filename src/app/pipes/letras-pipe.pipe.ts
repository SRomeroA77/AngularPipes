import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != null) {
      if (args == "ingles") {
        switch (value) {
          case 1: return "one";
          case 2: return "two";
          case 3: return "three";
          case 4: return "four";
          default:
            break;
        }
      }
    }
    switch (value) {
      case 1: return "uno";
      case 2: return "dos";
      case 3: return "tres";
      case 4: return "cuatro";
      default:
        break;
    }
    return null;
  }

}
