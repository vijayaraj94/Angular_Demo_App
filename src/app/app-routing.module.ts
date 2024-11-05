import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { ShoppingComponent } from './shopping/shopping.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CrudComponent } from './components/crud/crud.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { TemplatedriveformComponent } from './components/templatedriveform/templatedriveform.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'shopping', component: ShoppingComponent, canActivate: [AuthGuard] },
  { path: 'addtocart', component: AddtocartComponent, canActivate: [AuthGuard] },
  { path: 'crud', component: CrudComponent, canActivate: [AuthGuard] },
  { path: 'reactive-form', component: ReactiveformComponent, canActivate: [AuthGuard] },
  { path: 'templatedriven-form', component: TemplatedriveformComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
