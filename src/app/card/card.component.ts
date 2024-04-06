import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface PromptResponse {
  message: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMessage().subscribe((promptMessage) => {
      this.promptMessage = promptMessage; // Assign the response to the data variable
    });
  }
  promptMessage: PromptResponse = { message: '' };

  getMessage() {
    return this.http.get<PromptResponse>('http://192.168.0.12:8000/gemini/last_month/', {
      headers,
    }); // Replace with your actual API endpoint
  }
}
const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
