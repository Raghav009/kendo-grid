import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
// containers
import { ReportsComponent } from './reports.component';
import { SharedModule } from '../display/shared.module'
import { KendoGridComponent } from '../kendoGrid/grid.component'
// routes
export const ROUTES: Routes = [
  { path: '', component: ReportsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    GridModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ReportsComponent, KendoGridComponent
  ]
})
export class ReportsModule {

}
