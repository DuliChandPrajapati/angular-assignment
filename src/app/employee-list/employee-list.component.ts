import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees : any;

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    this.showEmployee();
  }


  showEmployee() {
    this.dataService.getEmployeeData()
    .subscribe(data => {
      console.log(data)
      this.employees=data;
    })   
  }


}
