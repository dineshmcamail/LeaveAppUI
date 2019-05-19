import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmplvedetComponent } from './emplvedet/emplvedet.component';
import { EmplvapplyComponent } from './emplvapply/emplvapply.component';
import { MgrdetailComponent } from './mgrdetail/mgrdetail.component';
import { RptemplvedetComponent } from './rptemplvedet/rptemplvedet.component';
import { DecisionComponent } from './decision/decision.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    EmpdetailComponent,
    EmplvedetComponent,
    EmplvapplyComponent,
    MgrdetailComponent,
    RptemplvedetComponent,
    DecisionComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
