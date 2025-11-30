import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {PersonsRoutingModule} from './persons-routing-module';
import {Persons} from './persons';
import {TableModule} from 'primeng/table';


@NgModule({
    declarations: [
        Persons
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        PersonsRoutingModule,
        TableModule
    ]
})
export class PersonsModule {
}
