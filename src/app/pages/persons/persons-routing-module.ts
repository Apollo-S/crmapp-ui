import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Persons} from './persons';

const routes: Routes = [
    {
        path: '',
        component: Persons
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PersonsRoutingModule {
}

