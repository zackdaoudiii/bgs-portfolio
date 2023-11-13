import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProjectPageComponent} from './pages/project-page/project-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent , data : { title : 'A global technology and services company committed to innovation| BGS'} },
  { path: 'project/:slug', component: ProjectPageComponent , data : { title : 'Projects'} },

  // { path: '**', pathMatch: 'full',component: PagenotfoundComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],

  // imports: [
  //   CommonModule
  // ]
})
export class AppRoutingModule { }
