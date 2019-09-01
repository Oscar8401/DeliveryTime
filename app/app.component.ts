import { Component } from '@angular/core';
import { deliveries } from './delivery';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public gridView: GridDataResult;
  public sort: SortDescriptor [] = [{
    field: 'startTime',
    dir: 'asc'
  }];
    public slots: any[] = deliveries;
    constructor() {
        this.loadDeliveries();
    }
        public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadDeliveries();
    }

    private loadDeliveries(): void {
        this.gridView = {
            data: orderBy(this.slots, this.sort),
            total: this.slots.length
        };
    }
}
