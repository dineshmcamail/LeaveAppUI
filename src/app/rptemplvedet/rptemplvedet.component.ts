import { Component, OnInit } from '@angular/core';
import { EmpdetailService } from '../empdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Emplvedet } from '../model/emplvedet';

@Component({
  selector: 'app-rptemplvedet',
  templateUrl: './rptemplvedet.component.html',
  styleUrls: ['./rptemplvedet.component.css']
})
export class RptemplvedetComponent implements OnInit {

  empid : number;
  rptlvedet : Emplvedet;

  constructor(public empdetservice: EmpdetailService, private router: ActivatedRoute, private routernav: Router) { 
    this.rptlvedet=new Emplvedet();
  }

  showappdeny(){
    //this.routernav.navigate(['/lveappdeny'],navigationExtras);
    this.routernav.navigate(['/lveappdeny',this.rptlvedet.id, this.rptlvedet.empid, this.rptlvedet.empname, this.rptlvedet.strdate,
                             this.rptlvedet.enddate,this.rptlvedet.noofdays,this.rptlvedet.lvebal,
                            this.rptlvedet.leavetype,this.rptlvedet.reason, this.rptlvedet.mgrid]);
  }

  showdashbrd() {
    this.routernav.navigate(['/empdashbrd',this.empid]);
   }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.empid = params['empid'];
    }); 
    this.getrptlvedet();
  }

  onSelect(slctrow:any){
    this.rptlvedet = slctrow;
    //this.routernav.navigate(['/lveappdeny',slctrow]);
  }

  getrptlvedet() {
    this.empdetservice.empid=this.empid;
    this.empdetservice.getrptlvedet().subscribe(rptlvedet => {
      this.empdetservice.rptleavelist = rptlvedet;
      console.log(this.empdetservice.rptleavelist);    
    });;

  }
}
