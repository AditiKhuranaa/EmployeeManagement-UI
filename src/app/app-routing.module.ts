import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { MedicalDetailsComponent } from './pages/medical-details/medical-details.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'employees', component: EmployeeListComponent},
  { path: 'medical', component: MedicalDetailsComponent},
  { path : 'charts', component : ChartsComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
