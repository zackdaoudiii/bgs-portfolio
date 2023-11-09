import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './component/layout/footer/footer.component';
import {LayoutComponent} from './component/layout/layout/layout.component';
import {HomeComponent} from './pages/home/home.component';
import {ProjectPageComponent} from './pages/project-page/project-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project/:slug', component: ProjectPageComponent },

  // {
  //   path: '', component : LayoutComponent,
  //   children:
  //     [
  //       { path: 'home', component: HomeComponent },
  //
  //     ],
  // },
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
