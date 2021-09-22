import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyCalComponent } from './components/body-cal/body-cal.component';
import { CardPromComponent } from './components/card-prom/card-prom.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardWeatherComponent } from './components/card-weather/card-weather.component';

import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { TableKeysComponent } from './components/table-keys/table-keys.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyCalComponent,
    CardPromComponent,
    GraphicBarComponent,
    CardWeatherComponent,
    TableKeysComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
