import { Component, OnInit } from '@angular/core';
import { LocaleService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers:[LocaleService]
})
export class AppComponent implements OnInit {

  constructor(private localeService: LocaleService) {

  }
  ngOnInit(){
    //this.localeService.getLocale();
  }
}
