import { Component,OnInit } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { LocaleService } from '../app/app.service';
@Component({
  selector: 'display',
  templateUrl: 'display.component.html'
})
export class DisplayComponent implements OnInit{
  constructor(public intlService: IntlService,private localeService: LocaleService) {
  }
  ngOnInit(){
    this.localeService.getLocale();
  }
  public date = new Date();
}
