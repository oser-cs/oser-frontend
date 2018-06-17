import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StudentService } from './student.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  student = {
    first_name: '',
    last_name: '',
    birth: '',
    email: '',
    phone: '',
    adress: {
      street: '',
      town: '',
      code: '',
    },
    emergency_contact: {
      nameparent: '',
      surnameparent: '',
      email_parent: '',
      home_phone: '',
      mobile_phone: '',
    },

  };

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  addStudent() {
    console.log(this.student)
      this.studentService.addNewStudent(this.student.first_name,
                                        this.student.last_name,
                                        this.student.birth,
                                        this.student.email,
                                        this.student.phone,
                                        this.student.adress.street,
                                        this.student.adress.town,
                                        this.student.adress.code,
                                        this.student.emergency_contact.nameparent,
                                        this.student.emergency_contact.surnameparent,
                                        this.student.emergency_contact.email_parent,
                                        this.student.emergency_contact.home_phone,
                                        this.student.emergency_contact.mobile_phone)
      .subscribe();
    }

}
