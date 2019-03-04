import { Student } from './../student';
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http: HttpClient) { }

  createStudent(student: Student) {
    return this.http.post(this.baseUri+'/create',student,{headers: this.headers});
  }


  readStudent() {
    return this.http.get(this.baseUri+'/read',{headers: this.headers});
  }

  updateStudent(student: Student) {
    return this.http.put(this.baseUri+'/update',student,{headers: this.headers});
  }

  deleteStudent(id: string) {
    return this.http.delete(this.baseUri+'/delete/'+id,{headers: this.headers});
  }
}
