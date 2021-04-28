import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


const AUTH_API = 'http://127.0.0.1:8000/';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  pathUrl:string;
  themes:Array[];
  themesSubject: BehaviorSubject<Array<[Object]>>;

  constructor(private httpClient:HttpClient) {
    this.themesSubject = new BehaviorSubject([]);
    // this.pathUrl="http://localhost:8000/api/";
   }

  getThemes(){
    return this.httpClient.get(AUTH_API+'api/themes.json')
                          .subscribe(
                            res => {
                              this.themes = res;
                              this.themesSubject.next(this.themes);
                            }
                          )
  }

  addTheme(themeToAdd: any): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post(AUTH_API+'api/themes.json',themeToAdd, {'headers': headers})
  }

  deleteTheme(themeToDel:any): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.delete(AUTH_API+'api/themes/'+themeToDel, {'headers': headers});

  }
}
