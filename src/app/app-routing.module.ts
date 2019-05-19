import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmplvedetComponent } from './emplvedet/emplvedet.component';
import { HomeComponent } from './home/home.component';
import { EmplvapplyComponent } from './emplvapply/emplvapply.component';
import { MgrdetailComponent } from './mgrdetail/mgrdetail.component';
import { RptemplvedetComponent } from './rptemplvedet/rptemplvedet.component';
import { DecisionComponent } from './decision/decision.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', 
    component: LoginComponent  
  },
  { path: 'dashboard/:empid', 
  component: DashboardComponent  
},
{ path: 'empdashbrd/:empid', 
  component: DashboardComponent  
},
{ path: 'empdet/:empid', 
    component: EmpdetailComponent  
  },
{ path: 'mgrdet/:empid', 
    component: MgrdetailComponent  
  },
{ path: 'emplvedet/:empid', 
  component: EmplvedetComponent  
},
{ path: 'rptlvedet/:empid', 
  component: RptemplvedetComponent  
},
{ path: 'emplveapply/:empid', 
  component: EmplvapplyComponent  
},
{ path: 'lveappdeny/:id/:empid/:empname/:strdate/:enddate/:noofdays/:lvebal/:leavetype/:reason/:mgrid', 
  component: DecisionComponent  
},
];