import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Data {
  incomes: number;
  expenses: number;
  profit: number;
  ratio: number;
  ratio_desc: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  data: Data = { expenses: 0, incomes: 0, profit: 0, ratio: 0, ratio_desc: '' }; // Initialize data with undefined
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData().subscribe((data) => {
      this.data = data; // Assign the response to the data variable
    });
  }
  getData() {
    return this.http.get<Data>('http://192.168.0.12:8000/api/profit/', {
      headers,
    }); // Replace with your actual API endpoint
  }
}
const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
