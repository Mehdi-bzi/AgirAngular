import { FormationService } from 'src/app/services/formation-service/formation.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formation-view',
  templateUrl: './formation-view.component.html',
  styleUrls: ['./formation-view.component.css']
})
export class FormationViewComponent implements OnInit, OnChanges, OnDestroy {

  formations: any;
  fSub = new Subscription;
  p = 1;

  constructor(private formationService:FormationService) { }

  ngOnChanges(): void {
    this.formationService.getFormations();
    this.fSub = this.formationService.formationsSubject.subscribe(
      (res)=>{   
        this.formations = res;
      }
    )
  }
  ngOnInit(): void {
    this.formationService.getFormations();
    this.fSub = this.formationService.formationsSubject.subscribe(
      (res)=>{   
        this.formations = res;
      }
    )
  }

  ngOnDestroy(){
    this.fSub.unsubscribe;
  }

}
