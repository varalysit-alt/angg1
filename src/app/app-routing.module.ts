import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './modules/administration/pages/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages-routing.module').then(module => module.PagesRoutingModule)
  },
  {
    path: 'administration/admins',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }