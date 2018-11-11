import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentNotesService } from '../../services/student-notes.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  public students: Student[];
  public rounding: boolean;
  public filtered: boolean;

  constructor(private studentsService: StudentNotesService) {}

  ngOnInit() {
    this.students = this.studentsService.getStudents;
    this.rounding = false;
    this.filtered = false;
  }

  public roundUp(): void {
    this.rounding = !this.rounding;
    this.filtered = false;
  }

  public filter(): void {
    this.filtered = !this.filtered;
  }
}
