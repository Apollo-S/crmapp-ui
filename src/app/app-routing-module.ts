import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth-module').then(m => m.AuthModule)
    },
    {
        path: 'persons',
        loadChildren: () => import('./pages/persons/persons-module').then(m => m.PersonsModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
