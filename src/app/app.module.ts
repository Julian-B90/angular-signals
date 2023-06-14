import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NameComponent } from './name/name.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start.component';

@NgModule({
  declarations: [
    StartComponent,
    AppComponent,
    NameComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
