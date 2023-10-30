import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CourselistComponent } from './components/courselist/courselist.component';
import { CardCreateComponent } from './components/card-create/card-create.component';
import { BodyComponent } from './components/body/body.component';
import { CardEditComponent } from './components/card-edit/card-edit.component';
import { authGuard } from 'src/app/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  {
    path: '',
    component: BodyComponent,
    canActivate: [authGuard],
    children: [
      { path: 'courses', component: CourselistComponent },
      { path: 'courses/:id', component: CardEditComponent },
      {
        path: 'new',
        component: CardCreateComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
