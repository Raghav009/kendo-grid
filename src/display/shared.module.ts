import { NgModule } from '@angular/core';

// containers
import { DisplayComponent } from './display.component'

@NgModule({
  declarations: [ DisplayComponent ],
  exports: [ DisplayComponent ]
})
export class SharedModule {}
