import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { ShoppingComponent } from './shopping/shopping.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ToastrModule } from 'ngx-toastr';
import { CrudComponent } from './components/crud/crud.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { TemplatedriveformComponent } from './components/templatedriveform/templatedriveform.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ShoppingComponent,
    AddtocartComponent,
    CrudComponent,
    ReactiveformComponent,
    TemplatedriveformComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
