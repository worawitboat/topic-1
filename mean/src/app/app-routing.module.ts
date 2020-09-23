import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { ReadDetailComponent} from './read-detail/read-detail.component';
import { CreatemangaComponent } from './createmanga/createmanga.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'read',
    component: ReadComponent,
  },  
  {
    path: 'read-detail',
    component: ReadDetailComponent
  },
  {
    path: 'createmanga',
    component: CreatemangaComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
