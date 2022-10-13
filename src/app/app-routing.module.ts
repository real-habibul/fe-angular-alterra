import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modul/home/home.component';
import { PassangerComponent } from './Modul/passanger/passanger.component';
import { DetailPassangerComponent } from './Modul/passanger/detail-passanger/detail-passanger.component';
import { AboutUsComponent } from './Modul/about-us/about-us.component';
import { ArticleComponent } from './Modul/article/article.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'passanger', component: PassangerComponent },
  { path: 'passanger/detail-passanger', component: DetailPassangerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'article', component: ArticleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
