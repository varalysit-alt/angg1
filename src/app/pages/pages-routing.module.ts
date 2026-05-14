import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './sections/main-page/main-page.component';
import { PagesComponent } from './pages.component';
import { RizhiComponentComponent } from '../modules/administration/pages/users-page/component/rizhi-component/rizhi-component.component';
import { NewsComponent } from './sections/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'mainPage',
        component: MainPageComponent,
      },
      {
        path: 'administration',
         loadChildren: () => import('../modules/administration/administration.module').then(module => module.AdministrationModule)
      },
      {
        path: 'mainPage/project',
        component: RizhiComponentComponent
      },
      {
        path: 'mainPage/news',
        component: NewsComponent
      },

      {
        path: '',
        redirectTo: 'mainPage',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }