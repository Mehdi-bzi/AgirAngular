import { Router } from '@angular/router';
import { FormationService } from './../../services/formation-service/formation.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-table-row-formation]',
  templateUrl: './table-row-formation.component.html',
  styleUrls: ['./table-row-formation.component.css']
})
export class TableRowFormationComponent implements OnInit {

  @Input() formationId: string;
  @Input() formationName: string;

  detailsRoute: string;
  editRoute: string;

  formationDeleteSub: Subscription;

  constructor(private formationService:FormationService,
              private route:Router) { }

  ngOnInit(): void {
    this.detailsRoute = '/formations/' + this.formationId;
    this.editRoute = '/formations/edit/' + this.formationId;
  }

  ngOnChanges(){
    this.formationService.getFormations();
  }

  onDeleteFormation(){
    this.formationDeleteSub = this.formationService.deleteFormation(this.formationId).subscribe(
      res => {
        console.log("ok")
      }
    );
    this.route.navigate(['']);
  }
}
