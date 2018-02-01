import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IphonePageComponent } from './iphone-page/iphone-page.component';
import { ImacPageComponent } from './imac-page/imac-page.component';
import { IpadPageComponent } from './ipad-page/ipad-page.component';
import { MacbookPageComponent } from './macbook-page/macbook-page.component';
import {RouterModule} from "@angular/router";
import { IphoneCardComponent } from './iphone-page/iphone-card/iphone-card.component';

const routes = [
  { path: 'iphone', component: IphonePageComponent },
  { path: 'imac', component: ImacPageComponent },
  { path: 'ipad', component: IpadPageComponent },
  { path: 'macbook', component: MacbookPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    IphonePageComponent,
    ImacPageComponent,
    IpadPageComponent,
    MacbookPageComponent,
    IphoneCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
