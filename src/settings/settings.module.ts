import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../display/shared.module'

// routes
export const ROUTES: Routes = [
  { path: '', component: SettingsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}
