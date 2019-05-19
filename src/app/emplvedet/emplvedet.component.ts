import { Component, OnInit } from '@angular/core';
import { EmpdetailService } from '../empdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Emplvedet } from '../model/emplvedet';

@Component({
  selector: 'app-emplvedet',
  templateUrl: './emplvedet.component.html',
  styleUrls: ['./emplvedet.component.css']
})
export class EmplvedetComponent implements OnInit {
  empid: number;
  emplvedet: Array<Emplvedet>;

  constructor(public empdetservice: EmpdetailService, private router: ActivatedRoute, private routernav: Router) { 
    this.emplvedet = new Array<Emplvedet>();
  }

  shownewapp(){
    this.routernav.navigate(['/emplveapply',this.empid]);
  }

  showdashbrd() {
    this.routernav.navigate(['/empdashbrd',this.empid]);
   }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.empid = params['empid'];
    }); 
    this.getlvedet();
  }

  getlvedet() {
    this.empdetservice.empid=this.empid;
    this.empdetservice.getlvedet().subscribe(emplvedet => {
      this.empdetservice.empleavelist = emplvedet;
      console.log(this.empdetservice.empleavelist);    
    });;

  }
}
