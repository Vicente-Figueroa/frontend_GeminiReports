import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


interface Data {
  incomes: number;
  expenses: number;
  profit: number;
}
interface PromptResponse {
  message: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend_GeminiReports';
  data: Data = { expenses: 0, incomes: 0, profit: 0 }; // Initialize data with undefined
  promptMessage: PromptResponse = {message: ''};
  constructor(private http: HttpClient) {}
  

  ngOnInit() {
    
    this.getData().subscribe(data => {
      this.data = data; // Assign the response to the data variable
    });
    this.getMessage().subscribe(promptMessage => {
      this.promptMessage = promptMessage; // Assign the response to the data variable
      console.log(promptMessage.message)

    });
  }
  
  getData() {
    return this.http.get<Data>('http://192.168.0.12:8000/api/profit/', {headers}); // Replace with your actual API endpoint
  }
  getMessage() {
    return this.http.get<PromptResponse>('http://192.168.0.12:8000/gemini/', {headers}); // Replace with your actual API endpoint
  
    }

}
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

