import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { JumboComponent } from './components/jumbo/jumbo.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SetcolorDirective } from './directives/setcolor.directive';

const appRoutes:Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JumboComponent,
    RegisterComponent,
    LoginComponent,
    SetcolorDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
