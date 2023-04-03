import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.sass']
})
export class StudentCardComponent implements OnInit {

  @Input() selectedStudent: Student;
  @Output() recieved: EventEmitter<boolean>=new EventEmitter<boolean>();


  ngOnInit(): void{
      this.recieved.emit(true);
    
  }
}
