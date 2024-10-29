import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-rightmenu',
    templateUrl: './app.rightmenu.component.html',
    styles: [
        `
            :host ::ng-deep {
                .p-checkbox {
                    width: 32px;
                    height: 32px;
                    .p-checkbox-box {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;

                        &.p-highlight {
                            color: #515c66;
                            background-color: transparent;
                            border-color: transparent;

                            .p-checkbox-icon {
                                color: var(--text-color);
                            }

                            &:hover {
                                border-color: #d9dee6;
                            }
                        }
                    }
                }
            }
        `,
    ],
})
export class AppRightMenuComponent {
    checked1 = true;

    checked2 = true;

    checked3 = false;

    checked4 = false;

    checked5 = false;

    checked6 = false;

    checked7 = false;

    checked8 = false;

    constructor(public layoutService: LayoutService) {}

    get rightMenuActive(): boolean {
        return this.layoutService.state.rightMenuActive;
    }

    set rightMenuActive(_val: boolean) {
        this.layoutService.state.rightMenuActive = _val;
    }

   
}
