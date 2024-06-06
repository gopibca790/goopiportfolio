import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {
        path:'home',
        title:'header component',
        component:MaincontentComponent,
       },
       {
        path:'',
        title:'header component',
        component:MaincontentComponent,
       },
       {
        path:'about',
        title:'aboutme component',
        component:AboutmeComponent,
       },
       {
        path:'skills',
        title:'skills component',
        component:SkillsComponent,
       },
];
