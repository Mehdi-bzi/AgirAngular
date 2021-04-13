import { Router } from '@angular/router';
import { ThemeService } from './../../services/theme-service/theme.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: '[app-table-row-theme]',
  templateUrl: './table-row-theme.component.html',
  styleUrls: ['./table-row-theme.component.css']
})
export class TableRowThemeComponent implements OnInit {

  @Input() themeId: string;
  @Input() themeName: string;
  @Input() themeDescription: string;

  detailsRoute: string;
  editRoute: string;

  themeDeleteSub: Subscription;

  constructor(private themeService:ThemeService,
              private route:Router) { }

  ngOnInit(): void {
    this.detailsRoute = '/themes/' + this.themeId;
    this.editRoute = '/themes/edit/' + this.themeId;
  }

  ngOnChanges(){
    this.themeService.getThemes();
  }

  onDeleteTheme(){
    this.themeDeleteSub = this.themeService.deleteTheme(this.themeId).subscribe(
      res => {
        console.log("ok")
      }
    );
    this.route.navigate(['']);
  }


  // ngOnDestroy(){
  //   this.themeDeleteSub.unsubscribe();
  // }

}
