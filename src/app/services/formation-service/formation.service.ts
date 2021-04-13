import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const AUTH_API = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  pathUrl:string;
  formations:Array[];
  formationsSubject: BehaviorSubject<Array<[Object]>>;

  constructor(private httpClient:HttpClient) {
    this.formationsSubject = new BehaviorSubject([]);
    this.pathUrl="http://localhost:8000/api/";
   }

   getFormations(pageNb: number){
    return this.httpClient.get(this.pathUrl+'formations.json')
                          .subscribe(
                            res => {
                              this.formations = res;
                              this.formationsSubject.next(this.formations);
                            }
                          )
  }

  addFormation(formationToAdd: any): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post(AUTH_API+'api/formations.json',formationToAdd, {'headers': headers})
  }
  
  deleteFormation(formationToDel:any): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.delete(AUTH_API+'api/formations/'+formationToDel, {'headers': headers});

  }

}