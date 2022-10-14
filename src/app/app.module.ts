import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule, MenuItem } from 'primeng/api';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './Modul/home/home.component';
import { PassangerComponent } from './Modul/passanger/passanger.component';
import { PtableComponent } from './components/passanger/ptable/ptable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { DetailPassangerComponent } from './Modul/passanger/detail-passanger/detail-passanger.component';
import { AboutUsComponent } from './Modul/about-us/about-us.component';
import { ArticleComponent } from './Modul/article/article.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PassangerComponent,
    PtableComponent,
    DetailPassangerComponent,
    AboutUsComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    SharedModule,
    ReactiveFormsModule,
    TableModule,
    CarouselModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
