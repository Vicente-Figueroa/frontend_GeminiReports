import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from './main_components/header/header.component';
import { CardComponent } from './features/ia_message/card.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent,RouterOutlet],
})
export class AppComponent {
  title = 'frontend_GeminiReports';
  constructor() {}



}