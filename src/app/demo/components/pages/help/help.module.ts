import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
	imports: [
		CommonModule,
		HelpRoutingModule,
		InputTextModule,
		AccordionModule
	],
	declarations: [HelpComponent]
})
export class HelpModule { }
