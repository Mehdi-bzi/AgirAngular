import { FormationViewComponent } from './views/formation-view/formation-view.component';
import { FormationNewViewComponent } from './views/formation-new-view/formation-new-view.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ThemeViewComponent } from './views/theme-view/theme-view.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemeNewViewComponent } from './views/theme-new-view/theme-new-view.component';
import { ThemeEditViewComponent } from './views/theme-edit-view/theme-edit-view.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent},
  {path: 'login', component: LoginViewComponent},
  // {path: 'dashboard', canActivate[AuthGuardService] component: HomeViewComponent},
  {path: 'dashboard', canActivate: [AuthGuardService], component: DashboardViewComponent},

  {path: 'themes/new', component: ThemeNewViewComponent},
  {path: 'themes/edit/:id', component: ThemeEditViewComponent},
  {path: 'formations/new', component: FormationNewViewComponent},
  {path: 'themes', component: ThemeViewComponent},
  {path: 'formations', component: FormationViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
