import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BusinessPage } from '../pages/business/business';
import { ReportPage } from '../pages/report/report';
import { ClientPage } from '../pages/client/client';
import { JobPage } from '../pages/job/job';
import { JobDetailsPage } from '../pages/job-details/job-details';

import { StatusBar } from '@ionic-native/status-bar';
import { JobManagerPage } from '../pages/job-manager/job-manager';
import { LoginPage } from '../pages/login/login';
import { UserDropdownPage } from '../pages/user-dropdown/user-dropdown';


import { HttpClientModule } from "@angular/common/http";
import { NgCalendarModule  } from 'ionic2-calendar';
import { DevPage } from '../pages/dev/dev';
import { RequestProvider } from '../providers/request/request';
import { C01ClientInfoPage } from '../pages/c01-client-info/c01-client-info';
import { C02ClientNewFormPage } from '../pages/c02-client-new-form/c02-client-new-form';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    HomePage,
    JobManagerPage,
    ClientPage,
    JobPage,
    BusinessPage,
    ReportPage,
    JobDetailsPage,
    UserDropdownPage,
    DevPage,
    C01ClientInfoPage,
    C02ClientNewFormPage
  ],
  imports: [
    ComponentsModule,
    NgCalendarModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage,
    HomePage,
    JobManagerPage,
    ClientPage,
    JobPage,
    BusinessPage,
    ReportPage,
    JobDetailsPage,
    UserDropdownPage,
    DevPage,
    C01ClientInfoPage,
    C02ClientNewFormPage
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider
  ]
})
export class AppModule {}
