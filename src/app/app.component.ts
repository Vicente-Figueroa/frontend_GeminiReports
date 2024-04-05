import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

interface PromptResponse {
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    CardComponent
  ],
})
export class AppComponent implements OnInit {
  title = 'frontend_GeminiReports';
  promptMessage: PromptResponse = { message: '' };
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMessage().subscribe((promptMessage) => {
      this.promptMessage = promptMessage; // Assign the response to the data variable
    });
  }

  getMessage() {
    return this.http.get<PromptResponse>('http://192.168.0.12:8000/gemini/', {
      headers,
    }); // Replace with your actual API endpoint
  }
}
const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
