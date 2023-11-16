import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin-home', pathMatch: 'full' },
  { path: 'admin-home', component: AdminhomeComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'register-emp', component: RegisterEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
