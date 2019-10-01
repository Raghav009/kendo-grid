import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { Http } from '@angular/http';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';
import { setData } from '@telerik/kendo-intl'
import * as _ from 'lodash';
import { customLocale } from './custom.locale';

@Injectable()
export class LocaleService {
    private url = 'https://unpkg.com/@progress/kendo-angular-intl@2.0.0/locales/json/{0}/all.json';
    private loaded: any = {};

    constructor(private http: Http,
                private intl: IntlService,
                @Inject(LOCALE_ID) public localeId: string) {

        this.loaded[localeId] = true;
    }

    public set(localeId: string): string {

        if (this.loaded[localeId]) {
            this.setLocale(localeId);
            return;
        }

        this.http.get(this.intl.format(this.url, localeId))
            .map(Response => Response.json())
            .subscribe((result: any) => {
                // set the recieved locale data
                var source = customLocale[localeId];
                var data = _.merge(result, source);
                //console.log(data.calendar.patterns.d);
                setData(data);

                this.loaded[localeId] = true;
                // set the local as current
                this.setLocale(localeId);
            });

            console.log("locale is set");
    }

    private setLocale(localeId: string): void {
        (this.intl as CldrIntlService).localeId = localeId;
        this.localeId = localeId;
    }

    public getLocale(): string{
        this.set('de');
        return 'de';
    }
}

export abstract class LocaleHelper{
    public static defaultLocaleId = 'en';
    public static de = 'de';
    public static getCurrentLocale(): string {

        return this.de || this.defaultLocaleId;
    }
}


export function initializer(provider: LocaleService){
  return () => provider.getLocale();
}
