
import { TableRowFormationComponent } from './components/table-row-formation/table-row-formation.component';
import { TokenStorageService } from './services/token-storage-service/token-storage.service';
import { AuthService } from './services/auth-service/auth.service';
import { ThemeService } from './services/theme-service/theme.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeViewComponent } from './views/theme-view/theme-view.component';
import { FormationViewComponent } from './views/formation-view/formation-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { ThemeEditViewComponent } from './views/theme-edit-view/theme-edit-view.component';
import { ThemeNewViewComponent } from './views/theme-new-view/theme-new-view.component';
import { FormationNewViewComponent } from './views/formation-new-view/formation-new-view.component';
import { FormationEditViewComponent } from './views/formation-edit-view/formation-edit-view.component';
import { TableRowThemeComponent } from './components/table-row-theme/table-row-theme.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeViewComponent,
    FormationViewComponent,
    HomeViewComponent,
    LoginViewComponent,
    DashboardViewComponent,
    ThemeEditViewComponent,
    ThemeNewViewComponent,
    FormationNewViewComponent,
    FormationEditViewComponent,
    TableRowThemeComponent,
    TableRowFormationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [
    ThemeService,
    AuthService,
    TokenStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
