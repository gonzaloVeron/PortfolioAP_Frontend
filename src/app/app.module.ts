import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experiences/experience/experience.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillCircleComponent } from './components/skill-circle/skill-circle.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { LoginComponent } from './components/login/login.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { UploadButtonComponent } from './components/upload-button/upload-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { EducationsComponent } from './components/educations/educations.component';
import { EducationComponent } from './components/educations/education/education.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UpdateAboutMeComponent } from './components/update-about-me/update-about-me.component';
import { UpdateExperienceComponent } from './components/update-experience/update-experience.component';
import { UpdateEducationComponent } from './components/update-education/update-education.component';
import { UpdateSkillComponent } from './components/update-skill/update-skill.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { DeleteElementComponent } from './components/delete-element/delete-element.component';
import { BackgroundImgComponent } from './components/background-img/background-img.component';
import { LogoutComponent } from './components/logout/logout.component';

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
    ProjectComponent,
    LoginComponent,
    UploadButtonComponent,
    IconButtonComponent,
    EducationsComponent,
    EducationComponent,
    UpdateUserComponent,
    UpdateAboutMeComponent,
    UpdateExperienceComponent,
    UpdateEducationComponent,
    UpdateSkillComponent,
    UpdateProjectComponent,
    DeleteElementComponent,
    BackgroundImgComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
