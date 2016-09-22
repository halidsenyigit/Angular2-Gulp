import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { UserListComponent } from './controllers/user-list.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    UserListComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
