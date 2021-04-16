import { ThemeService } from './../../services/theme-service/theme.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormationService } from './../../services/formation-service/formation.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formation-edit-view',
  templateUrl: './formation-edit-view.component.html',
  styleUrls: ['./formation-edit-view.component.css']
})
export class FormationEditViewComponent implements OnInit {

  formation:Array<any>;
  formaSub: Subscription;

  themes:Array<any>;
  themesSub: Subscription;

  editFormationForm: FormGroup;

  id: string;

  constructor(private formationService:FormationService,
              private route:ActivatedRoute,
              private fb:FormBuilder,
              private themeService:ThemeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    // on récupère la formation à modier
    this.formationService.getSingleFormation(this.id);

    this.formaSub = this.formationService.formationsSubject
                      .subscribe(
                        res=>{
                          this.formation = res;
                        }

    )

    // on récupère les thèmes attachés
    this.themeService.getThemes();
    this.themesSub = this.themeService.themesSubject
                      .subscribe(
                        res=>{
                          this.themes = res;
                        }

    )

    this.editFormationForm = this.fb.group({
      'name': [''],
      'description': [''],
      'price': [],
      'duration': [''],
      'theme' : ['']
    })

  

}

onSubmitEditFormationForm(){
  // on transforme l'objet en json avec JSON.stringify et on stock l'id formation à modifier
  let formationToUpdate = JSON.stringify(this.editFormationForm.value);
  let idFormationToUpdate = this.id;

  this.formationService.updateFormation(idFormationToUpdate, formationToUpdate)
      .subscribe(
        data => {
        console.log(data)
      }
      );
  window.location.href = "/dashboard";
  console.log("test2"+this.editFormationForm.value)
}


}
