import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
public employee: any;

  constructor(private dataService: DataService, private _Activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
    let id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(id);
    this.getEmployeeDetail(id);
  }

  getEmployeeDetail(id : any) {
    this.dataService.getEmployeeDetail(id)
    .subscribe(data => {
      console.log(data)
      this.employee=data;
    })   
  }

}
