import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empid:number;

  constructor(private router: ActivatedRoute, private navroute: Router) { }

  showempdet() {
    this.navroute.navigate(['/empdet',this.empid]);
  }

  showmgrdet() {
    this.navroute.navigate(['/mgrdet',this.empid]);
  }

  showlvedet() {
    this.navroute.navigate(['/emplvedet',this.empid]);
  }

  showrptlvedet() {
    this.navroute.navigate(['/rptlvedet',this.empid]);
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.empid = params['empid'];      
    });
  }

}
