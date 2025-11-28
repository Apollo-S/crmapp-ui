import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {PersonsRoutingModule} from './persons-routing-module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        PersonsRoutingModule
    ]
})
export class PersonsModule {
}
