import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
@Component({
    templateUrl: './invoice.component.html',
    styles: [
        `
            :host ::ng-deep .p-button-label {
                font-weight: 400;
            }
        `,
    ],
})
export class InvoiceComponent {
    constructor(public layoutService: LayoutService) {}

    print() {
        window.print();
    }
}
