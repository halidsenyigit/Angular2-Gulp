import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DenemeComponent } from './controllers/deneme.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    DenemeComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
