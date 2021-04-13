import { Router } from '@angular/router';
import { ThemeService } from './../../services/theme-service/theme.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { FormationService } from 'src/app/services/formation-service/formation.service';

@Component({
  selector: 'app-formation-new-view',
  templateUrl: './formation-new-view.component.html',
  styleUrls: ['./formation-new-view.component.css']
})
export class FormationNewViewComponent implements OnInit {
  newFormationForm: FormGroup;
  errorMsg: string;
  themes: Array<[any]>;
  themesToDisplay: Array<[any]>;

  themesSubject: BehaviorSubject<Array<[Object]>>;
  themeSub: Subscription;

  constructor(private fb:FormBuilder,
    private router:Router,
    private themeService:ThemeService,
    private formationService:FormationService) {
      this.themesSubject = new BehaviorSubject([]);
     }

  ngOnInit(): void {
    this.themeService.getThemes();
    this.themeSub = this.themeService.themesSubject
    .subscribe(
      (res)=>{
        this.themes = res;
      }
    )

    console.log(this.themes)
    
    this.newFormationForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'price': [0, Validators.required],
      'duration': ['', Validators.required],
      'theme' : ['']
    });


  }

  onSubmitNewFormationForm() {
    // on transforme l'objet en json avec JSON.stringify pour l'utiliser 
    // dans le themeService pour l'ajouter en BDD
    let formationToAdd = JSON.stringify(this.newFormationForm.value);
    console.log("test1"+this.newFormationForm.value)
    this.formationService.addFormation(formationToAdd)
        .subscribe(
          data => {
          console.log(data)
        }
        );
    console.log("test2"+this.newFormationForm.value);
    this.router.navigate(['/'])
}



}
