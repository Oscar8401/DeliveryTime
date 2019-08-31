import { Component } from '@angular/core';
import { products } from './products';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public gridData: any[] = products;
}
