import { Component } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'AK-grid',
    templateUrl: 'grid.component.html'

})
export class KendoGridComponent {

    public gridData: any = sampleProducts;
}
