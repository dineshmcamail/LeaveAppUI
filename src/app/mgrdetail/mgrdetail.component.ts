import { Component, OnInit } from '@angular/core';
import { EmpdetailService } from '../empdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Empdetail } from '../model/empdetail';

@Component({
  selector: 'app-mgrdetail',
  templateUrl: './mgrdetail.component.html',
  styleUrls: ['./mgrdetail.component.css']
})
export class MgrdetailComponent implements OnInit {
  empid : number;
  mgrdet: Empdetail;
  //constructor(public empdetservice: EmpdetailService) {
    //this.empdet=new Empdetail();
  //}

  constructor(public empdetservice: EmpdetailService, private router: ActivatedRoute, private routernav: Router) {
        this.mgrdet=new Empdetail();
  }

  showdashbrd() {
    this.routernav.navigate(['/empdashbrd',this.empid]);
   }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.empid = params['empid'];
    }); 
    this.getmgrdetail();
    }
  getmgrdetail() {
    this.empdetservice.empid=this.empid;
    this.empdetservice.getmgrdet().subscribe(mgrdet => {
      this.empdetservice.mgrdetail = mgrdet;
      console.log(mgrdet);
    });;
  }
}
