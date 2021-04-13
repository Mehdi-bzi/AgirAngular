import { FormationService } from './../../services/formation-service/formation.service';
import { ThemeService } from './../../services/theme-service/theme.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Console } from 'node:console';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  homeThemeForm: FormGroup;
  themesSub: Subscription;
  themes: Array<[]>;

  formationsSub: Subscription;
  formations: Array<[]>;
  formationsToDisplay: Array<[]>;

  constructor(private fb:FormBuilder, private themeService:ThemeService,
              private formationService:FormationService) { }

  ngOnInit(): void {
    this.homeThemeForm = this.fb.group({
      'theme': ''
    });
    this.themeService.getThemes();
    this.themesSub = this.themeService.themesSubject
                                      .subscribe(
                                        (res) => {
                                          this.themes = res
                                        }
                                      )

    this.formationService.getFormations();
    this.formationsSub = this.formationService.formationsSubject
                                      .subscribe(
                                        (res) => {
                                          this.formations = res
                                        }
                                      )

  }

  displayFormation(valueTheme){
      document.getElementById("secondColumn").innerHTML = "";
      this.formationsToDisplay = this.formations.filter(f=>f.theme == '/api/themes/'+valueTheme)
  }

  displayContentFormation(formation){
    document.getElementById("secondColumn").innerHTML = formation.description;

  }

}
