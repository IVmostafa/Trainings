import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'roundNote'
})
export class RoundNotePipe implements PipeTransform {

  transform(studentNote: number, note: number): any {
    if (studentNote >= note
      && studentNote < 50) {
      return 50;
    }

    return studentNote;
  }

}
