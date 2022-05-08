import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experiences/experience/experience.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillCircleComponent } from './components/skill-circle/skill-circle.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    MainComponent,
    UserAvatarComponent,
    AboutMeComponent,
    ExperiencesComponent,
    ExperienceComponent,
    SkillCircleComponent,
    HardAndSoftSkillsComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
