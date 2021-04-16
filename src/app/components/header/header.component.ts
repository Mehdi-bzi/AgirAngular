import { BehaviorSubject, Subscription } from 'rxjs';
import { TokenStorageService } from './../../services/token-storage-service/token-storage.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  // isLogged$ = new BehaviorSubject<boolean>(false);
  isLogged=false;
  // isLoggedSub: Subscription;
  constructor(private tokenStorage:TokenStorageService) {

   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()){
      this.isLogged = true;
    }


  }

  // ngOnInit(): void {
  //   if (this.tokenStorage.getToken()){
  //     this.isLogged$.next(true);
  //   }

  //   this.isLoggedSub = this.isLogged$.subscribe(res =>
  //     this.isLogged = res

  //   )
  //   console.log(this.isLogged);
  // }

  // ngOnDestroy(){
  //   this.isLoggedSub.unsubscribe();
  // }



  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}

