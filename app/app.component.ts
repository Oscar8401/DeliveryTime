import { Component } from '@angular/core';
import { deliveries } from './delivery';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public slots: any[] = deliveries;
}
