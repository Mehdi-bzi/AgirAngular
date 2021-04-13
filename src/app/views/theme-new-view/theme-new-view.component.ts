import { FormationService } from './../../services/formation-service/formation.service';
import { ThemeService } from './../../services/theme-service/theme.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-theme-new-view',
  templateUrl: './theme-new-view.component.html',
  styleUrls: ['./theme-new-view.component.css']
})
export class ThemeNewViewComponent implements OnInit {
  newThemeForm: FormGroup;
  errorMsg: string;
  formations: Array<[any]>;
  formationsToDisplay: Array<[any]>;

  formationsSubject: BehaviorSubject<Array<[Object]>>;
  formationSub: Subscription;

  constructor(private fb:FormBuilder,
              private router:Router,
              private themeService:ThemeService,
              private formationService:FormationService) { 
                this.formationsSubject = new BehaviorSubject([]);
 
              }

  ngOnInit(): void {

    // this.formationService.getFormations();
    // this.formationSub = this.formationService.formationsSubject.subscribe(
    //                                 (res) => {
    //                                   if(res.theme === "/api/themes/1"){
    //                                     this.formations = res;
    //                                   }
                                      
    //                                 }
    // )
    
    // this.formationsToDisplay = this.formations.filter(f => f.theme == "/api/themes/1");


    this.newThemeForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      // 'formation': this.fb.array(this.formations.map(x => !1))
  });

  console.log(this.formationsToDisplay);
  }

  onSubmitNewThemeForm() {
    console.log(this.formationsToDisplay);
    // on transforme l'objet en json avec JSON.stringify pour l'utiliser 
    // dans le themeService pour l'ajouter en BDD
    let themeToAdd = JSON.stringify(this.newThemeForm.value);
    console.log("test1"+this.newThemeForm.value)
    this.themeService.addTheme(themeToAdd)
        .subscribe(
          data => {
          console.log(data)
        }
        );
    console.log("test2"+this.newThemeForm.value);
    this.router.navigate(['/'])
}



}
