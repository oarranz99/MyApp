import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { TimerComponent } from './timer/timer.component';
import { TituloHtmlPipe } from './titulo-html.pipe';
import { FormsModule } from '@angular/forms';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    TimerComponent,
    TituloHtmlPipe,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
