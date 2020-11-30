import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule  } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutWebsiteComponent } from './aboutWebsite/aboutWebsite.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    AboutWebsiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
