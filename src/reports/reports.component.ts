import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../app/app.service'
@Component({
  selector: 'reports',
  template: `
    <div>
      <h2>Reports</h2>
    </div>
    <AK-grid></AK-grid>
    <display></display>
  `,
  providers:[LocaleService]
})
export class ReportsComponent implements OnInit {

  constructor(private localeService: LocaleService) {

  }
  ngOnInit(){
    //this.localeService.getLocale();
  }
}
