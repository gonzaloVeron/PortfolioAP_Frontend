import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experiences/experience/experience.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillCircleComponent } from './components/skill-circle/skill-circle.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "app",
    pathMatch: "full"
  },
  {
    path: "app",
    component: MainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
