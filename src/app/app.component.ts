import { Component } from '@angular/core';
import {Student} from './student/student.model'
@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'TERRA'},
    {name: 'Han Solo', isJedi: true, temple: 'MARTE'},
    {name: 'Leia', isJedi: false}
  ]
}
