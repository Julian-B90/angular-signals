import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { NameComponent } from './name/name.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'name', component: NameComponent },
  { path: 'todo', component: AppComponent },
  { path: '', redirectTo: `todo`, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
