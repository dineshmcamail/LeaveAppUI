import { Component, OnInit } from '@angular/core';
import { EmpdetailService } from '../empdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Emplvedet } from '../model/emplvedet';

@Component({
  selector: 'app-emplvapply',
  templateUrl: './emplvapply.component.html',
  styleUrls: ['./emplvapply.component.css']
})
export class EmplvapplyComponent implements OnInit {
  empid : number;
  emplvedet : Emplvedet;
  message : string;

  constructor(public empdetservice: EmpdetailService, private router: ActivatedRoute, private routernav: Router) { 
    this.emplvedet=new Emplvedet();
  }

  showempdash() {
    this.routernav.navigate(['/empdashbrd',this.empid]);
   }

  showlvedet() : void{   
    this.message = "";
    this.empdetservice.emplveSave(this.emplvedet).subscribe(leaveid => {
      
              this.message = "Record is inserted with id ===> "+leaveid;
              console.log(this.message);
              //this.empdetservice.empleavelist.push(this.emplvedet);
              this.routernav.navigate(['/emplvedet',this.empid]);
           },error => {
            console.log("Error From User Service : "+error);
             }
           );
            }
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.empid = params['empid'];
      this.emplvedet.empid = params['empid'];
      this.emplvedet.status = "Pending"
      var today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      this.emplvedet.appliedon = `${year}-${month}-${day}`;
    }); 
  }

}
