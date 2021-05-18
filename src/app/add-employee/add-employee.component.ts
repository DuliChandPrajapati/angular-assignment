import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Employee } from '../shared/models/employee';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public formGroup: any;
  public error: boolean =  false;
  constructor(private formBuilder: FormBuilder, private dataService: DataService,) { 
    this.formGroup = this.formBuilder.group({
      name: '',
      email: '',
      phone: ''
    });
  }


  ngOnInit(): void {
  }

  onSubmit(formData: Employee) {
    if(formData.name != '') {
      this.error = false;
    this.dataService.addPerson(formData)
      .subscribe(data => {
        console.log(data)
      })  
    } else {
      this.error = true;
      console.log('error');
    }
  }

  onReset() {
    this.formGroup.reset();
  }

}
