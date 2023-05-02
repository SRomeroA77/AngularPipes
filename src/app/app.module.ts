import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { LetrasPipePipe } from './pipes/letras-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    LetrasPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
