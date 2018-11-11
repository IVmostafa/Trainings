import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { students } from '../conts/students.consts';

@Injectable({
  providedIn: 'root'
})
export class StudentNotesService {
  private students: Student[];

  constructor() {
    this.students = students;
  }

  public get getStudents(): Student[] {
    return this.students;
  }
}
