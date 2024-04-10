import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routing,appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { ViewportafolioComponent } from './components/viewportafolio/viewportafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewportafolioComponent
  ],
  imports: [
    BrowserModule,
    Routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
