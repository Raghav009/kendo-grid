import { NgModule,CUSTOM_ELEMENTS_SCHEMA,LOCALE_ID,APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';

// containers
import { AppComponent } from './app.component';
import { LocaleService, LocaleHelper, initializer } from './app.service'
// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
  { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule' },
  { path: 'reports', loadChildren: '../reports/reports.module#ReportsModule' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    GridModule,
    IntlModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
    //DisplayComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[
    LocaleService, HttpModule,
    //{provide: APP_INITIALIZER , useFactory: initializer, deps: [LocaleService],multi:true}
  ]
})
export class AppModule {}
