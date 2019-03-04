import { Student } from './../../student';
import { StudentService } from './../../shared/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public students:Student[];
  constructor(private _studentService: StudentService) { }

  ngOnInit() {
    this.readStudents();
  }

  readStudents(){
    this._studentService.readStudent().subscribe(
      data=>{
        console.log(data);
        this.students = data['msg'];
      } ,
      error=>{
        console.log(error);
      }
    )
  }
}
