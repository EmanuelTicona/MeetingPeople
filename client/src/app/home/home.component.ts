import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getusers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getusers() {
    this.http.get('https://localhost:7277/api/Users').subscribe({
      next: response => this.users = response,
      error: err => console.log(err),
      complete : () => console.log('complete')
    })
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
