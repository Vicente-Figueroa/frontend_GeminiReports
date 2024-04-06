import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Transaction {
  id: number;
  date: string;
  amount: number;
  type: string;
  account: string;
}

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
  data: Transaction[] = [] // Initialize data with undefined
 
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData().subscribe((data) => {
      this.data = data.results; // Assign the response to the data variable
    });
  }

  getData() {
    return this.http.get<any>('http://192.168.0.12:8000/api/transactions/', {
      headers,
    }); // Replace with your actual API endpoint
  }
}
