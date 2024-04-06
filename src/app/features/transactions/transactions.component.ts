import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/categories';

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
  data: Transaction[] = []; // Initialize data with undefined
  url: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.url = window.location.href;
    const lastColonIndex = this.url.lastIndexOf('/');
    const substringAfterColon =
      lastColonIndex !== -1 ? this.url.substring(lastColonIndex + 1) : '';
    const hasAccounts = this.url.includes('cuentas');
    if (hasAccounts) {
     const endpoint = '?account__name=' + substringAfterColon;

      this.getData(endpoint).subscribe((data) => {
        this.data = data.results; // Assign the response to the data variable
      });
    } else {
      
      const endpoint = '?type=' + capitalizeString(substringAfterColon);

      this.getData(endpoint).subscribe((data) => {
        this.data = data.results; // Assign the response to the data variable
      });
    }
  }

  getData(endpoint: string) {
    return this.http.get<any>(
      'http://192.168.0.12:8000/api/transactions/' + endpoint,
      {
        headers,
      }
    ); // Replace with your actual API endpoint
  }
}
function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}