import { ThemeService } from './../../services/theme-service/theme.service';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-theme-view',
  templateUrl: './theme-view.component.html',
  styleUrls: ['./theme-view.component.css']
})
export class ThemeViewComponent implements OnInit, OnDestroy, OnChanges {

  themes: any;
  themesSubscription = new Subscription;

  constructor(private themeService:ThemeService) { }

  ngOnChanges(){
    this.themeService.getThemes();
    this.themesSubscription = this.themeService.themesSubject.subscribe(
      (res)=>{   
        this.themes = res;
      }
    )
  }

  ngOnInit(): void {
    this.themeService.getThemes();
    this.themesSubscription = this.themeService.themesSubject.subscribe(
      (res)=>{   
        this.themes = res;
      }
    )
  }



  ngOnDestroy(){
    this.themesSubscription.unsubscribe;
  }

}

  


