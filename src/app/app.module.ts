import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { LayoutComponent } from './component/layout/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroblockComponent } from './component/heroblock/heroblock.component';
import { ServiceComponent } from './component/service/service.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { StartInovationBlockComponent } from './component/start-inovation-block/start-inovation-block.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { TeamsComponent } from './component/teams/teams.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    HeroblockComponent,
    ServiceComponent,
    AboutusComponent,
    StartInovationBlockComponent,
    ProjectsComponent,
    TeamsComponent,
    ProjectPageComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
