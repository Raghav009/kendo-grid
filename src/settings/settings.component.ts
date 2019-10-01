import { Component } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
@Component({
  selector: 'settings',
  template: `
    <div>
      <h2>Settings</h2>
    </div>
    <div>{{ intlService.formatDate(date, 'd') }} <label>Customised format </label></div>
    <div>{{ intlService.formatDate(date,'dd/MM/y', 'de') }} <label> Fixed format 'dd/MM/y' </label></div>
    <display></display>
  `
})
export class SettingsComponent {

  constructor(public intlService: IntlService) {
  }

  public date = new Date();
}
