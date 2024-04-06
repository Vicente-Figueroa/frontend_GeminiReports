import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../../models/accounts';
import { Profit } from '../../models/profit';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = []; // Initialize data with undefined
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getData('accounts').subscribe((data) => {
      this.accounts = data.results; // Assign the response to the data variable
    });
  }

  getData(url: string) {
    return this.http.get<any>('http://192.168.0.12:8000/api/' + url + '/', {
      headers,
    }); // Replace with your actual API endpoint
  }
}
