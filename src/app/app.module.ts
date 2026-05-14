import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './@theme/components/header/header.component';
SidebarMainComponent
import { FooterComponent } from './@theme/components/footer/footer.component';
import { MenuParentsComponent } from './@theme/components/menu/components/menu-parents/menu-parents.component';
import { MenuChildrensComponent } from './@theme/components/menu/components/menu-childrens/menu-childrens.component';
import { ThemeSwitcherComponent } from './@theme/components/header/theme-switcher/theme-switcher.component';
import { MainPageComponent } from './pages/sections/main-page/main-page.component';



import { SharedModule } from '../app/domains/modules/shared/shared.module';
import { SidebarMainComponent } from './@theme/components/sidebar/sidebar.component';
import { NewsComponent } from './pages/sections/news/news.component';
import { AddNewsComponent } from './pages/sections/add-news/add-news.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    SidebarMainComponent,
    FooterComponent,
    MenuParentsComponent,
    MenuChildrensComponent,
    ThemeSwitcherComponent,
    MainPageComponent,
    NewsComponent,
    AddNewsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
