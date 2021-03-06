import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutWebsiteComponent } from './aboutWebsite/aboutWebsite.component';
import { AlphabeticIndexComponent } from './alphabetic-index/alphabetic-index.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'aboutWebsite', component: AboutWebsiteComponent }
  { path: 'alphabetic-index', component: AlphabeticIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
