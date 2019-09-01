import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { deliveries } from './delivery';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import {FormGroup, FormControl} from '@angular/forms';
import {GridComponent} from '@progress/kendo-angular-grid';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
    public grid: GridComponent;
    public message = 'The delivery has been sended';
    public gridView: GridDataResult;
    public sort: SortDescriptor [] = [{
      field: 'startTime',
      dir: 'asc'}];
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
      data: orderBy(this.sortslots(this.converSlots(this.slots)), this.sort),
      total: this.slots.length
      };
    }
    private updateTimeFormat(time: string) {
      return `${time.split(':')[0]}:${time.split(':')[1]}`;
    }

    private converSlots(slots: any[]) {
      for (let i in slots) {
        slots[i].startTime = this.updateTimeFormat(slots[i].startTime);
        slots[i].stopTime = this.updateTimeFormat(slots[i].stopTime);
        slots[i].isChecked = true;
      }

      return slots;
    }
    private sortslots(slots: any[]) {
      return slots.sort( this.compare );
    }
    private compare( a, b ) {
      if ( a.startTime < b.startTime ){
        return -1;
      }
      if ( a.startTime > b.startTime ){
        return 1;
      }
      return 0;
    }
   private handleSelected($event, dataItem) {
      if ($event.target.checked === true) {
        dataItem.isChecked = false;
      }else{
        dataItem.isChecked = true;
      }
    }
    private onButtonClick() {
      alert(this.message);
    }
}