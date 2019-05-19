import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmpdetailService } from '../empdetail.service';
import { Emplvedet } from '../model/emplvedet';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  slctlvedet : Emplvedet;
  id : number;
  empid : number;
  empname : String;
  noofdays : Number;
  strdate : String;
  enddate : String;
  leavetype : String;
  reason : String;
  lvebal : number;
  mgrcmnt : String;

  constructor(public empdetservice: EmpdetailService, private router: ActivatedRoute, private routernav: Router) {
    this.slctlvedet = new Emplvedet();
   }

  
    doapprove() : void{
      this.slctlvedet.mgrcmnt = this.mgrcmnt;
      this.slctlvedet.status = 'Approved';   
      this.empdetservice.aprvelve(this.slctlvedet).subscribe(leaveid => {
              console.log("leave approved for id : "+leaveid);
              this.routernav.navigate(['/rptlvedet',this.slctlvedet.mgrid]);
           },error => {
            console.log("Error From User Service : "+error);
             }
           );
            }
    
    dodeny() : void{
      this.slctlvedet.mgrcmnt = this.mgrcmnt;
      this.slctlvedet.status = 'Denied';   
      this.empdetservice.aprvelve(this.slctlvedet).subscribe(leaveid => {
              console.log("leave approved for id : "+leaveid);
              this.routernav.navigate(['/rptlvedet',this.slctlvedet.mgrid]);
           },error => {
            console.log("Error From User Service : "+error);
             }
           );
            }
            
    showdashbrd() {
        this.routernav.navigate(['/empdashbrd',this.slctlvedet.mgrid]);
   }

  ngOnInit() {
    this.router.params.subscribe(params => {
      //this.slctlvedet = params['rptlvedet'];
      this.slctlvedet.id = params['id'];
      this.slctlvedet.empid = params['empid'];
      this.slctlvedet.empname = params['empname'];
      this.slctlvedet.noofdays = params['noofdays'];
      this.slctlvedet.strdate = params['strdate'];
      this.slctlvedet.enddate = params['enddate'];
      this.slctlvedet.lvebal = params['lvebal'];
      this.slctlvedet.leavetype = params['leavetype'];
      this.slctlvedet.reason = params['reason'];
      this.slctlvedet.mgrid =  params['mgrid'];
    }); 
  }
}
