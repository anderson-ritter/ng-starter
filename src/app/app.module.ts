
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store/root-store.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(ptBr, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RootStoreModule,
    SharedModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
