import { Component, OnInit, Input } from '@angular/core';

import {Student} from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './jad-student.component.html',
  styleUrls: ['./jad-student.component.css']
})
export class JadStudentComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  ngOnInit() { }

  clicked() { console.log(`Student: ${this.student.name}`) }
}
