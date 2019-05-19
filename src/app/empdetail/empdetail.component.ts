import { Component, OnInit } from '@angular/core';
import { Empdetail } from '../model/empdetail';
import { EmpdetailService } from '../empdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
   empdet : Empdetail;
   empid : number;

  //constructor(public empdetservice: EmpdetailService) {
    //this.empdet=new Empdetail();
  //}

  constructor(public empdetservice: EmpdetailService, private router: ActivatedRoute, private routernav: Router) {
    this.empdet=new Empdetail();
  }

  showdashbrd() {
    this.routernav.navigate(['/empdashbrd',this.empid]);
   }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.empid = params['empid'];
    }); 
    this.getempdetail();
    }
  getempdetail() {
    this.empdetservice.empid=this.empid;
    this.empdetservice.getmydet().subscribe(empdet => {
      this.empdetservice.empdetail = empdet;
      console.log(empdet);
    });;
  }

}
