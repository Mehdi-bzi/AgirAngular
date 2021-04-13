import { TokenStorageService } from './../../services/token-storage-service/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}

