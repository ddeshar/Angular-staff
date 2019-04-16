import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'profile' , component: ProfileComponent},
  {path: 'owner' , component: OwnerComponent},
  {path: 'owner/create' , component: OwnerAddComponent},
  {path: 'owner/edit/:id' , component: OwnerEditComponent},
  {path: 'dashboard' , component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
