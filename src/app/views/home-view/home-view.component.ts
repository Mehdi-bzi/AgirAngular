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
  active = false;
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
      document.getElementById("secondColumn").innerHTML = `<img style="opacity: 0.5;" class="img-fluid mx-auto d-block" src="../../../assets/css/img/${valueTheme}.jpg">`;
      this.formationsToDisplay = this.formations.filter(f=>f.theme == "/api/themes/"+valueTheme)
  }

//   displayFormation(valueTheme){
//     document.getElementById("secondColumn").innerHTML = "";
//     for(let i = 0;i<this.formations.length;i++){
//       if(this.formations[i].theme.name == valueTheme){
//         this.formationsToDisplay.push(this.formations[i]);
//       }
//     }
// }

//   displayFormation(valueTheme){
//     document.getElementById("secondColumn").innerHTML = "";
//     this.formationsToDisplay = this.formations.filter(f=>f.theme == "/api/themes/"+valueTheme)
// }

//   displayFormation(valueTheme){
//     console.log(this.formations[0].theme);
// }

  displayContentFormation(formation){
    this.active = false;
    console.log(formation.theme.length-1)
    //on recupere l'id du thème car il n'y en a moins de 10 apres on changera l'IRI en ID dans Api Platform
    var idThemePhoto = formation.theme;
    document.getElementById("secondColumn").innerHTML = 
    `<div class="card text-center">
    <div class="card-header">
    Détails de la formation du thème ${idThemePhoto.substr(idThemePhoto.length-1)}
    </div>
   
    <div class="card-body">
      <h5 class="card-title">${formation.name}</h5>
        <img class="img-fluid" width="300" p-2" src="../../../assets/css/img/${idThemePhoto.substr(idThemePhoto.length-1)}.jpg">
      <h5 class="h-6  text-secondary">Description :</h5>
      <p class="card-text">${formation.description}</p>
      <hr/>
      <h5 class="h-6  text-secondary">Coût de la formation :</h5>
      <p class="card-text">${formation.price} €</p>
      <a href="http://www.agir-management.com" class="btn btn-success">En savoir plus sur le site</a>
    </div>
    <div class="card-footer text-muted">
      Durée de la formation : ${formation.duration}
    </div>
  </div>`
    ;

  // displayContentFormation(formation){
  //   document.getElementById("secondColumn").innerHTML = formation.description;

  }

}
