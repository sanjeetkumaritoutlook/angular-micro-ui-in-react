import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IdocFormsComponent } from './idoc-forms/idoc-forms.component';
import { CoreModule } from './core/core.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    IdocFormsComponent, OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // entryComponents: [IdocFormsComponent],
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(IdocFormsComponent, { injector });
    customElements.define('idoc-forms', el);
  }
  ngDoBootstrap() {}
}
