import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'name', component: NameComponent },
  { path: 'todo', component: AppComponent },
  { path: '', redirectTo: `/todo`, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
]; // sets up routes constant where you define your routes

@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
