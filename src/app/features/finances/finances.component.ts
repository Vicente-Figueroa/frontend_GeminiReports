import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Account {
  name: string;
  total_transactions: number;
}
interface Data {
  incomes: number;
  expenses: number;
  profit: number;
  ratio: number;
  ratio_desc: string;
}
const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Component({
  selector: 'app-finances',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.css',
})
export class FinancesComponent implements OnInit {
  accounts: Account[] = []; // Initialize data with undefined
  data: Data = { expenses: 0, incomes: 0, profit: 0, ratio: 0, ratio_desc: '' }; // Initialize data with undefined

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getData('accounts').subscribe((data) => {
      this.accounts = data.results; // Assign the response to the data variable
    });
    this.getData('profit').subscribe((data) => {
      this.data = data; // Assign the response to the data variable
    });
  }

  getData(url: string) {
    return this.http.get<any>('http://192.168.0.12:8000/api/' + url + '/', {
      headers,
    }); // Replace with your actual API endpoint
  }
}
