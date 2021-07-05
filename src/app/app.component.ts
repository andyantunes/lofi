import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';
  address: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://viacep.com.br/ws/01001000/json/')
      .subscribe((res) => {
        console.log(res);
        this.address = res;
      });
  }
}
